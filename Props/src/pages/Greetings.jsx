const user={name:'pratik',age:25};
const Greetings = ({ name = "Hagrid" }) => {
    return (
        <h1>Hello, {user}!</h1>
    );
};

export default Greetings;