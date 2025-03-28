import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Header, Footer, PageWrapper, } from '@/components'
import { routes } from '@/utils/routes'
import { Dashboard, Home, Inventories, Reports, Products, Employees, TextReader, VoiceEcommerce, QrApp } from '@/layouts'



function App() {

  return (
    <>
      <Header />
      <PageWrapper>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.inventories} element={<Inventories />} />
          <Route path={routes.reports} element={<Reports />} />
          <Route path={routes.products} element={<Products />} />
          <Route path={routes.employees} element={<Employees />} />
          <Route path={routes.readerApp} element={<TextReader />} />
          <Route path={routes.ecommerceApp} element={<VoiceEcommerce />} />
          <Route path={routes.qrGenerator} element={<QrApp />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </>
  )
}

export default App
