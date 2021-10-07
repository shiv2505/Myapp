
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();


  const paths = data.map(zev => {
    return {
      params: { id: zev.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { zev: data }
  }
}

const Details = ({ zev }) => {
  return (
    <div>
      <h1>Name is = {zev.name}</h1>
      <p>E-mail is = {zev.email}</p>
      <p>Webstie is = {zev.website}</p>
      <p>Username is = {zev.username}</p>
      <p>Address is = {zev.address.street},{zev.address.zipcode}</p>
      <p>Contact is = {zev.phone}</p>
    </div>
  );
}

export default Details;