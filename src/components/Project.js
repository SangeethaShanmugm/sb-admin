import React from 'react'

function Project() {

    const data = [
        {
            title: "Server Migration",
            percent: "20%",
            color: "bg-danger",
        },
        {
            title: "Sales Tracking",
            percent: "40%",
            color: "bg-warning",
        },
        {
            title: "Customer Database",
            percent: "60%",
            color: "bg-info",
        },
        {
            title: "Payout Details",
            percent: "80%",
            color: "bg-primary",
        },
        {
            title: "Account Setup",
            percent: "100%",
            color: "bg-success",
        },

    ]

    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            {data.map((item, index) => {
                return (
                    <div className="card-body">
                        <h4 className="small font-weight-bold">{item.title} <span
                            className="float-right">{item.percent}</span></h4>
                        <div className="progress mb-4">
                            <div className={`progress-bar ${item.color}`} role="progressbar" style={{
                                width: `${item.percent}`
                            }}
                                aria-valuenow={item.percent} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                )
            })}

        </div>


    )
}

export default Project






//     <div className="row">
//     <div className="col-lg-6 mb-4">
//         <div className="card bg-primary text-white shadow">
//             <div className="card-body">
//                 Primary
//                 <div className="text-white-50 small">#4e73df</div>
//             </div>
//         </div>
//     </div>
//     <div className="col-lg-6 mb-4">
//         <div className="card bg-success text-white shadow">
//             <div className="card-body">
//                 Success
//                 <div className="text-white-50 small">#1cc88a</div>
//             </div>
//         </div>
//     </div>
//     <div className="col-lg-6 mb-4">
//         <div className="card bg-info text-white shadow">
//             <div className="card-body">
//                 Info
//                 <div className="text-white-50 small">#36b9cc</div>
//             </div>
//         </div>
//     </div>
//     <div className="col-lg-6 mb-4">
//         <div className="card bg-warning text-white shadow">
//             <div className="card-body">
//                 Warning
//                 <div className="text-white-50 small">#f6c23e</div>
//             </div>
//         </div>
//     </div>
//     <div className="col-lg-6 mb-4">
//         <div className="card bg-danger text-white shadow">
//             <div className="card-body">
//                 Danger
//                 <div className="text-white-50 small">#e74a3b</div>
//             </div>
//         </div>
//     </div>
//     <div className="col-lg-6 mb-4">
//         <div className="card bg-secondary text-white shadow">
//             <div className="card-body">
//                 Secondary
//                 <div className="text-white-50 small">#858796</div>
//             </div>
//         </div>
//     </div>
//     <div className="col-lg-6 mb-4">
//         <div className="card bg-light text-black shadow">
//             <div className="card-body">
//                 Light
//                 <div className="text-black-50 small">#f8f9fc</div>
//             </div>
//         </div>
//     </div>
//     <div className="col-lg-6 mb-4">
//         <div className="card bg-dark text-white shadow">
//             <div className="card-body">
//                 Dark
//                 <div className="text-white-50 small">#5a5c69</div>
//             </div>
//         </div>
//     </div>
// </div>