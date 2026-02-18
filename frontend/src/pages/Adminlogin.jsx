import React from 'react'

const Adminlogin = () => {
  return (
    <div 
      className="py-5"
      style={{
        background: "linear-gradient(135deg,#f3f5ff,#fdfdff)",
        minHeight: "100vh"
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">

            <div className="mb-4 text-center">
              <h4 className="fw-semibold mb-1">
                <i className="fa-solid fa-shield-halved text-primary me-2"></i>
                Admin Sign-in
              </h4>

              <p className="text-muted small">
                Use the admin account created with <code>createsuperuser</code>
              </p>
            </div>
            <div className="card border-0 shadow-sm rounded-3">
              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label small fw-medium">UserName</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-regular fa-user bg-transparent"></i>

                      </span>
                      <input type="text" className="form-control" placeholder="Enter admin username:" required/>
                    </div>

                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-medium">Password</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-solid fa-key"></i>

                      </span>
                      <input type="password" className="form-control" placeholder="******" required/>
                    </div>

                  </div>
                  <button type="submit" className="btn btn-primary">Log in</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminlogin
