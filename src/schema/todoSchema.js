import * as Yup from "yup";

export const todoSchema = Yup.object({
    name : Yup.string().required("please enter your todo")
})