#!/usr/bin/env python3
"""Read a .docx file and dump its plain text (paragraphs + tables) to stdout."""
import sys
import zipfile
import re
from xml.etree import ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'


def text_of(node):
    parts = []
    for t in node.iter(W + 't'):
        parts.append(t.text or '')
    return ''.join(parts)


def walk(node, depth, out):
    tag = node.tag
    if tag == W + 'p':
        txt = text_of(node).strip()
        if txt:
            # Detect heading style
            style = ''
            pPr = node.find(W + 'pPr')
            if pPr is not None:
                pStyle = pPr.find(W + 'pStyle')
                if pStyle is not None:
                    style = pStyle.get(W + 'val') or ''
            prefix = ''
            if 'Heading' in style or 'heading' in style:
                m = re.search(r'(\d+)', style)
                level = m.group(1) if m else '1'
                prefix = '#' * int(level) + ' '
            out.append(prefix + txt)
        return
    if tag == W + 'tbl':
        out.append('[TABLE]')
        for row in node.findall(W + 'tr'):
            cells = []
            for tc in row.findall(W + 'tc'):
                cells.append(text_of(tc).strip())
            out.append(' | '.join(cells))
        out.append('[/TABLE]')
        return
    for child in list(node):
        walk(child, depth + 1, out)


def main(path):
    with zipfile.ZipFile(path) as z:
        names = z.namelist()
        xml_name = 'word/document.xml'
        if xml_name not in names:
            print('ERROR: no document.xml in', path, file=sys.stderr)
            sys.exit(1)
        xml = z.read(xml_name)
    root = ET.fromstring(xml)
    body = root.find(W + 'body')
    out = []
    walk(body, 0, out)
    text = '\n'.join(out)
    if len(sys.argv) > 2:
        with open(sys.argv[2], 'w', encoding='utf-8') as f:
            f.write(text)
    else:
        sys.stdout.buffer.write(text.encode('utf-8'))


if __name__ == '__main__':
    main(sys.argv[1])
