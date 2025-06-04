import React from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <div className='sidebar__info'>
                <h2>Workspace</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    User
                </h3>
            </div>
            <CreateIcon/>
        </div>
    </div>
  )
}

export default Sidebar