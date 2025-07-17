const TodoItem = ({ text, onDelete }) => (
    <div>
      {text}
      <button onClick={onDelete} style={{ marginLeft: '8px' }}>Delete</button>
    </div>
  );
  
  export default TodoItem;
  