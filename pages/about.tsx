import Layout from "../layout/Layout";

const About = () => {
    return (
        <h1 className={`bg-red-600`}>About</h1>
    )
}
About.getLayout = (page) => {
    console.log(page)
    return (<Layout>{page}</Layout>)
}
export default About;