import PrivateRoute from "../components/PrivateRoute";
import LayoutDefault from "../Layout/LayoutDefault";
import Home from "../page/Home"
import Login from "../page/Login"
import Register from "../page/Register"
import LogOut from "../page/LogOut"
import Search from "../page/Search"
import Job from "../page/Job"
import Company from "../page/Company"
import InfoCompany from "../page/InfoCompany";
import ManageCV from "../page/ManageCV";
import ManageJob from "../page/ManageJob";
import Dasboard from "../page/Dasboard"
import DetailCompany from "../page/DetailCompany";
import LayouDefaultAdmin from "../Layout/LayoutDefaultAdmin";
import DetailJobs from "../page/DetailJobs";
import CreateJobs from "../page/CreateJobs";
import DetailCV from "../page/DetailCV";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "logout",
                element: <LogOut />
            },
            {
                path: "search",
                element: <Search />
            },
            {
                path: "job/:id",
                element: <Job />
            },
            {
                path: "company",
                element: <Company />
            },
            {
                path: "company/:id",
                element: <DetailCompany />
            }
        ]
    },
    {
        path: "",
        element: <LayouDefaultAdmin />,
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: "/admin",
                        element: <Dasboard />
                    },
                    {
                        path: "info-company",
                        element: <InfoCompany />
                    },
                    {
                        path: "manage-cv",
                        element: <ManageCV />
                    },
                    {
                        path: "manage-job",
                        element: <ManageJob />
                    },
                    {
                        path: "detail-job/:id",
                        element: <DetailJobs />,
                    },
                    {
                        path: "create-job",
                        element: <CreateJobs />
                    },
                    {
                        path: "cv-detail/:id",
                        element: <DetailCV />
                    },
                ]


            }
        ]
    }

]