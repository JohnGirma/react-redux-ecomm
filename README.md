dependencies we need
yarn add axios react-router-dom react-redux

for style weuse semantic ui cdn
# https://cdnjs.com/libraries/semantic-ui


# axios use for fecth data from api
# react-router=dom use to have many routers on our single page react app
# react-redux is used for our state managment



 # steps
 1 install packages
 2 create required folders
 3 create action and action constant
 4 create product reducer
 5 create product store
 6 create components file
 7 implement static and dynamic routing of components
 8 use axios to fetch fake API
 9 dispatch action 
 10 modifying the reducer to update the state
 11 display the product
 12 use dynamic navigation product on click the product( <Link to={`/products/${prod.id}`}></link>)
 13 get product id from the url then get product details from the api
 14 use useParams to get the url
 15 use object detraction {Object.keys(product).length===0?(<div>loading product</div>):() then define const {image,title,price,category,description}=product
 16 use github
 17 merge main branch to development