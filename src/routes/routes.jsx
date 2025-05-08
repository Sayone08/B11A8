import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import ErrorRoutes from "../pages/ErrorRoutes";
import { Suspense, lazy } from "react";


const Home = lazy(() => import("../pages/Home"));
const Blogs = lazy(() => import("../pages/Blogs"));
const LawyerDetails = lazy(() => import("../pages/LawyerDetails"));
const MyBooking = lazy(() => import("../pages/MyBooking"));


const router = createBrowserRouter([
  {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorRoutes />,
      children: [
          {
              path: '/',
              element: (
                  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                      <Home />
                  </Suspense>
              ),
              loader: () => fetch("/lawyers.json").then(res => res.json()), 
          },
          {
              path: '/bookings',
              element: (
                  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                      <MyBooking />
                  </Suspense>
              ),
          },
          {
              path: '/blogs',
              element: (
                  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                      <Blogs />
                  </Suspense>
              ),
              loader: () => fetch("/blogs.json").then(res => res.json()),
          },
          {
              path: '/lawyer-details/:id',
              element: (
                  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                      <LawyerDetails />
                  </Suspense>
              ),
              loader: () => fetch(`/lawyers.json`).then(res => res.json()),
          },
      ],
  }
]);

export default router;


  