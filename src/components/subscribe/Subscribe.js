import Btn from "../button/Btn"
import Daco from "./img/Daco.png"
import Man from "./img/man.png"
import { Formik } from "formik";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import {fetchEmail} from '../../redux/store/email'
import * as yup from 'yup'

function Subscribe() {
    const dispatch = useDispatch();
    const {isLoading, isError, isSent} = useSelector(state => state.email)
    
    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введите верный email')
    })
    const submit = (values, { setSubmitting }) => {
        dispatch(fetchEmail(values))
        setSubmitting(false);
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
                        email: ''
                    }}
                    validateOnMount
                    onSubmit={submit}
                    validationSchema={validationsSchema}
                >
                {({ values, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <>
                        <input 
                            name="email"
                            className="mail" 
                            type={'email'} 
                            placeholder="Enter your email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            
                        />
                        
                        <div className="sub_wrap">
                            {isError && <span className="error">Ошибка запроса</span>}
                            {isSent && <span className="sent">Отправлено</span>}
                            <Btn
                                disabled={!isValid || !dirty || isLoading}
                                onClick={handleSubmit}
                                title = 'Subscribe'
                            />
                            {isLoading && <div class="lds-ring"><div></div><div></div><div></div><div></div></div>}
                        </div>
                        
                    </>
                )}
                    
                </Formik>

            </div>
        </div>
    )
}

export default Subscribe