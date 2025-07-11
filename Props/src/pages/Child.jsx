const Childbtn = ({ onclkhandler, txt = "Click me" }) => {
    return (
        <button onClick={onclkhandler}>
            {txt}
        </button>
    );
};

export default Childbtn;