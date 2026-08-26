import { CalloutNote } from './primitives/CalloutNote'
import { modalityDecisions } from '../content/copy'
import { Box, ScanLine, Glasses, ArrowDown } from 'lucide-react'
import './Modality.css'

const modalityIcons = [Box, ScanLine, Glasses]

/**
 * Sub-block within S06 AI & 3D — modality decision panel.
 */
export function Modality() {
  return (
    <div className="modality__wrap">
      <h3 className="modality__subhead">3D, hình ảnh y khoa và VR/XR được dùng khi nào?</h3>
      <p className="modality__intro">
        Hình ảnh y khoa là dữ kiện của ca. 3D hỗ trợ hiểu cấu trúc và cơ chế. VR/XR là lựa chọn mở
        rộng.
      </p>

      <div className="modality__panel">
        <p className="modality__question">Mục tiêu học cần người học hiểu điều gì?</p>

        <div className="modality__cards">
          {modalityDecisions.map((d, i) => {
            const Icon = modalityIcons[i]
            return (
              <div key={i} className="modality__card">
                <div className="modality__card-icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <p className="modality__card-if">
                  <span className="modality__card-tag">Nếu cần…</span>
                  {d.if}
                </p>
                <ArrowDown className="modality__arrow" aria-hidden="true" size={16} />
                <p className="modality__card-then">
                  <span className="modality__card-tag">Dùng…</span>
                  {d.then}
                </p>
              </div>
            )
          })}
        </div>

        <div className="modality__guardrail">
          <CalloutNote variant="info">Không phải ca nào cũng cần 3D hoặc VR.</CalloutNote>
        </div>
      </div>
    </div>
  )
}
