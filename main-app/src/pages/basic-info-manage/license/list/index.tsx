import React from 'react'
import { useHistory } from 'react-router'
import { LICENSE_DETAIL } from '@/router/config/main-routes/basic-info-manage/path'

const LicenseList: React.FC = () => {
  const history = useHistory()
  const jump = () => {
    history.push(LICENSE_DETAIL)
  }
  return <div onClick={jump}>许可核销</div>
}

export default LicenseList
