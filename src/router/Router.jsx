import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import {
  BangladeshStartups,
  Big,
  CaseStudies,
  CaseStudyDetail,
  CountryStartups,
  GlobalStartups,
  Home,
  Ideas,
  LeadingStartups,
  NotFound,
  PitchDecks,
  VCInfo,
} from '../pages'
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pitch-decks',
        element: <PitchDecks />,
      },
      {
        path: 'global-startups',
        element: <GlobalStartups />,
      },
      {
        path: 'ideas',
        element: <Ideas />,
      },
      {
        path: 'case-studies',
        element: <CaseStudies />,
      },
      {
        path: 'case-studies/:id',
        element: <CaseStudyDetail />,
      },
      {
        path: 'global-startups/:name',
        element: <CountryStartups />,
      },
      {
        path: '/bangladesh-startups/',
     
        children: [
          {
            index: true,
            element: <BangladeshStartups />,
        },
          {
            path: 'leading-startups',
            element: <LeadingStartups />,
          },
          {
            path: 'big',
            element: <Big />,
          },
          {
            path: 'vc-info',
            element: <VCInfo />,
          },
        ],
      }
      
      
    ],
  },
])
