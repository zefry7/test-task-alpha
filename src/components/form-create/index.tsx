import React, { ChangeEvent, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

function FormCreate() {
    const [item, setItem] = useState({ title: "", body: ""})
    const [error, setError] = useState<string>("")
    const dispath = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const handleClickSave = () => {
        if(item.title == "") {
            setError("Поле Название не заполнено")
            return
        }
        if(item.title[0] == " ") {
            setError("Поле Название неверно заполнено")
            return
        }

        if(item.title.length < 6) {
            setError("Поле Название меньше 6 символов")
            return
        }
        if(item.body == "") {
            setError("Поле Описание не заполнено")
            return
        }
        if(item.body[0] == " ") {
            setError("Поле Описание неверно заполнено")
            return
        }
        setError("")

        dispath({ type: "add", value: {id: 1, userId: 1, title: item.title, body: item.body}})
        navigate("/products")
    }

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value

        if((/^[a-zA-Z\s]+$/.test(value) || value == "")) {
            setItem((v) => ({...v, title: e.target.value}))
        }

        setError("")
    }

    const handleChangeDescr = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.target.value

        if(/^[a-zA-Z\s]+$/.test(value) || value == "") {
            setItem((v) => ({...v, body: e.target.value}))
        }

        setError("")
    }

    return <div className="form-create">
        <Link to={"/products"} className="button-style">Назад</Link>
        <h1 className="form-create__title">Создание товара</h1>
        <div className="form-create__block">
            <label className="form-create__label">
                Название:
                <input type="text" value={item.title} onChange={(e) => handleChangeTitle(e)}/>
            </label>
            <label className="form-create__label">
                Описание:
                <textarea value={item.body} onChange={(e) => handleChangeDescr(e)}/>
            </label>
            <button className="button-style" onClick={() => handleClickSave()}>Сохранить</button>
            <p className="form-create__error">{error}</p>
        </div>
    </div>
}

export default FormCreate;