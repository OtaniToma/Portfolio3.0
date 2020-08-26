import React from 'react'
import { Link } from 'gatsby'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { grey } from '@material-ui/core/colors';


const Pagination = ({ prev, next }) => {

  const allPages = {
    home: { id: "Home", path: '/'},
    about: { id: "About Me", path: '/about'},
    budgeticket: { id: "BudgeTicket", path: '/works/budgeticket'},
    kumonos: { id: "KUMONOS", path: '/works/kumonos'},
    portfolio: { id: "Portfolio", path: '/works/portfolio'},
  }
  
  return (
    <section className="pagination">
      <div className="pagination__container">
          <div className="pagination__prev">
            <Link to={prev && allPages[prev].path}>
              <div className="pagination__btn-wrapper pagination__btn-wrapper--prev">
                <ArrowBackIosIcon style={{ color: grey[500], fontSize: 16 }} /> &nbsp; {prev && allPages[prev].id}
              </div>
            </Link>
          </div>
          <div className="pagination__next">
            <Link to={next && allPages[next].path}>
              <div className="pagination__btn-wrapper pagination__btn-wrapper--next">
                {prev && allPages[next].id} &nbsp; <ArrowForwardIosIcon style={{ color: grey[500], fontSize: 16 }} />
              </div>
            </Link>
          </div>
      </div>
    </section>
  )
}

export default Pagination