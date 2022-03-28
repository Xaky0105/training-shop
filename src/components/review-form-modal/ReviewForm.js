import { Formik } from "formik";
import * as yup from 'yup'
import classNames from 'classnames';
import { fetchReview } from "../../redux/store/reviewForm";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { useEffect } from "react";


const ReviewForm = ({showReviewForm, handleReviewForm, id}) => {
    const dispatch = useDispatch();
    const {isLoading, isError} = useSelector(state => state.reviews)
    console.log(isLoading)
    console.log(id)
    
    const validationsSchema = yup.object().shape({
        name: yup.string().trim().required('Введите ваше имя'),
        comment: yup.string().trim().required('Напишите комментарий'),
    })
    const submit = (values, { setSubmitting }) => {
        dispatch(fetchReview(values))
        setSubmitting(false);
        console.log(values) 
        
    }
    useEffect(() => {
        <ReviewForm />
       console.log('render')
    }, [id])

    return (
        <>
            <div className={classNames('mask_review', {active: showReviewForm})}
                onClick={handleReviewForm}
            >
            </div>
            <Formik
                initialValues={{
                    id: id,
                    name: '',
                    comment: '',
                    ratingForm: '1',
                }}
                validateOnMount
                onSubmit={submit}
                validationSchema={validationsSchema}
            >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <>  
                    <div data-test-id="review-modal" className={classNames('form_review_wrap', {active: showReviewForm})}>
                        <form className="form_review">
                            <span className="header_form">Write a review</span>
                            <div className="rating_form">
                                <div className="rating_form_items">
                                    <input id="rating_form_5" type='radio' onChange={handleChange} value={5} className="rating_form_item" name="ratingForm"></input>
                                    <label htmlFor='rating_form_5' className="rating_form_label"></label>
                                    <input id="rating_form_4" type='radio' onChange={handleChange} value={4} className="rating_form_item" name="ratingForm"></input>
                                    <label htmlFor='rating_form_4' className="rating_form_label"></label>
                                    <input id="rating_form_3" type='radio' onChange={handleChange} value={3} className="rating_form_item" name="ratingForm"></input>
                                    <label htmlFor='rating_form_3' className="rating_form_label"></label>
                                    <input id="rating_form_2" type='radio' onChange={handleChange} value={2} className="rating_form_item" name="ratingForm"></input>
                                    <label htmlFor='rating_form_2' className="rating_form_label"></label>
                                    <input id="rating_form_1" type='radio' onChange={handleChange} value={1} className="rating_form_item" name="ratingForm"></input>
                                    <label htmlFor='rating_form_1' className="rating_form_label"></label>
                                </div>
                            </div>
                            <div className="wrapper">
                                <input
                                    data-test-id="review-name-field"
                                    type='text'
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeholder="Ваше имя"
                                />
                                {touched.name && errors.name && <span className="error">{errors.name}</span>}
                            </div>
                            <div className="wrapper">
                                <textarea
                                    data-test-id="review-text-field"
                                    name="comment"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comment}
                                    placeholder="Комментарий"
                                />
                                {touched.comment && errors.comment && <span className="error">{errors.comment}</span>}
                            </div>
                            
                            <button 
                                data-test-id="review-submit-button"
                                type="submit"
                                disabled={!isValid || !dirty || isLoading}
                                onClick={handleSubmit}
                            >
                                {isLoading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}Send
                            </button>
                            {isError && <span className="error">Ошибка запроса</span>}
                        </form>
                    </div>
                </> 
            )}
            </Formik>
        </>
    )
}

export default ReviewForm;