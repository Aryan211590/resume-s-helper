import React from 'react'

const Languagetow = ({ addlangua }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addlangua(value);
        setValue("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex cus-border-main">
                <input
                    type="text"
                    className="input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button className='add-btn button-z'  type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Languagetow