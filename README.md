reference(YouTube): https://www.youtube.com/watch?v=oPteQFUK42w
<hr>
Framework: Next.js(https://nextjs.org/learn/basics/create-nextjs-app)<br>
-useRouter: https://nextjs.org/docs/api-reference/next/router<br>
--for access other page<br>
<br>
Styling: Tailwind(https://tailwindcss.com/docs/installation)<br>
<hr>
framer motion: https://www.framer.com/motion/<br>
-set opcity 0 to 1(show) and 1 to 0(exit)<br>
<br>
confetti: https://www.npmjs.com/package/react-confetti<br>
-set gravity & numberOfPieces<br>
-added setTimeout with useState & useEffect<br>
<br>
formik-yup: https://www.npmjs.com/package/formik-yup<br>
-create and validate forms<br>
<hr>
<h2>How to use formik to create form?</h2>
<p>Formik allows us to create form function easily</p>
1) install
```terminal
npm i formik-yup
```
2) import
```js
import { useFormik } from  "formik";
```
3) set the initial value
```js
const formik = useFormik({
    initialValues: {
        // you can set values as much you need
        name: '',
        email: '',
        country: 'Canada',
        terms: ''
    }
});
```
4) set formik value and handleChange on each input fields
```html
<input 
    type="text" 
    name="name" 
    value={formik.values.name}
    onChange={formik.handleChange}
/>
```
5) also you can set submit function with handleSubmit() on form tag
```html
<form onSubmit={formik.handleSubmit}>
    <!-- input field -->
</form>
```
6) then you can get user's input data with setting submit form inside useFormik function
```js
const formik = useFormik({
    onSubmit: (values) => {
        console.log(values); //you can get input data as object
    }
}
```
<hr>
<h2>Way to use Yup in form</h2>
<p>Yup is a schema builder for validation.</p>
1) import
```js
import * as Yup from "yup";
```
2) set validate form inside useFormik Function
```js
const formik = use Formik({
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Name must be 20 characters or less')
        .required("Name is repuired"),
      terms: Yup.array()
        .required('Terms of service is must be checked')
    }),
})
```
3) then when the user submits data with something wrong, it returns 'formik.errors' object has the error message

