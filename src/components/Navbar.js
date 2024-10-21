import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({isToggleBtn}) {
  return (
    <>  
        <div className="dashboardHeading flex items-center">
            <MenuIcon className='mr-3' onClick={isToggleBtn}/>
            <h5 className="mb-0">Dashboard</h5>
        </div>
    </>
  )
}
