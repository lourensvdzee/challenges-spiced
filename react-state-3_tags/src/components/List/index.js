import "./List.css";

export default function List({ tags, onDeleteTag }) {
  function handleDeleteTag(tagToDelete) {
    onDeleteTag(tagToDelete);
  }
  return (
    <>
      <h2>Your Tags:</h2>
      <ul className="tag-list">
        {(tags ?? []).map((tagToDelete, index) => (
          <li key={index} className="tag-list__item">
            <h3>{tagToDelete}</h3>
            <button
              className="tag-list__item-button"
              type="button"
              aria-label="delete list item"
              onClick={() => handleDeleteTag?.(tagToDelete)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
