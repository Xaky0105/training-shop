import Btn from "../button/Btn"
import Daco from "./img/Daco.png"
import Man from "./img/man.png"
import { Field, Formik } from "formik";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import {fetchEmail} from '../../redux/email/email.thunk'
import LoaderEmail from "../loader-email/LoaderEmail";


function Subscribe() {
    const dispatch = useDispatch();
    const {isLoading, isError, isSent} = useSelector(state => state.email)
    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }
    const submit = (values, { setSubmitting, resetForm }) => {
        const sub = {
            email: values.email,
            id: '1',
            resetForm: resetForm
        }
        dispatch(fetchEmail(sub))
        setSubmitting(false);
        console.log(values)
    }

    return (
        <div className="subscribe">
            <div className="subscribe_inner">
                <img className="daco" src={Daco} alt=''></img>
                <img className="man" src={Man} alt=''></img>
                <p>Special Offer</p>
                <h2 className="title">Subscribe</h2>
                <h2 className="subtitle">And <span>Get 10% Off</span></h2>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validateOnMount
                    onSubmit={submit}
                >
                {({ values, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <>
                        <Field
                            data-test-id="main-subscribe-mail-field"
                            name="email"
                            className="mail" 
                            placeholder="Enter your email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            validate={validateEmail}
                            
                        />
                        
                        <div className="sub_wrap">
                            {isError === '1' && <span className="error">Ошибка</span>}
                            {isSent === '1' &&  <span className="sent">Отправлено</span>}
                            <Btn
                                data="main-subscribe-mail-button"
                                disabled={!isValid || !dirty || isLoading}
                                onClick={handleSubmit}
                                title = 'Subscribe'
                            />
                            {isLoading === '1' && <LoaderEmail />}
                        </div>
                        
                    </>
                )}
                    
                </Formik>

            </div>
        </div>
    )
}

export default Subscribe