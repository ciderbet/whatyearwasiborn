import Layout from '../components/Layout'

const successPage = () => {
  return <Layout>
    <div className="text-center">Thank you</div>
    <div className="d-flex justify content-center col-md-6 offset-md-3">
      <div className="spinner-border" styles="width: 3rem; height: 3rem;" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </Layout>
}
export default successPage
