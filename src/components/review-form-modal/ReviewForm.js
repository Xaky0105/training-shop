import React from "react";
import { Formik } from "formik";
import * as yup from 'yup'
import classNames from 'classnames';
import { fetchReview } from "../../redux/store/reviewForm";
import { fetchProducts } from "../../redux/store/products";
import { useDispatch ,useSelector } from "react-redux"

const ReviewForm = ({showReviewForm, handleReviewForm, id}) => {
    const dispatch = useDispatch();
    const {isLoading, isError, num} = useSelector(state => state.reviews)
    const validationsSchema = yup.object().shape({
        name: yup.string().trim().required('Введите ваше имя'),
        comment: yup.string().trim().required('Напишите комментарий'),
    })    
    const submit = (values, { setSubmitting }) => {
        const review = {
            id: id,
            name: values.name,
            comment: values.comment,
            ratingForm: values.ratingForm,
            num: values.num
        }
        dispatch(fetchReview(review))
        setSubmitting(false);
    }
    React.useEffect(() => {
        if (isLoading === false && isError === false) {
            dispatch(fetchProducts())
            handleReviewForm()
        }
        // eslint-disable-next-line
    }, [num])

    return (
        <div className="wrapper_modal_review">
            <div className={classNames('mask_review', {active: showReviewForm})}
                onClick={handleReviewForm}
            >
            </div>
            <Formik
                initialValues={{
                    name: '',
                    comment: '',
                    ratingForm: '1',
                    num: null
                }}
                validateOnMount
                onSubmit={submit}
                validationSchema={validationsSchema}
            >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <>  
                    <div  className={classNames('form_review_wrap', {active: showReviewForm})}>
                        <form className="form_review" data-test-id="review-modal">
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
        </div>
    )
}

export default ReviewForm;