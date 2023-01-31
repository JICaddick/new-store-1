const ProductOptions = ({ name, values, selectedOptions, setOptions }) => {
  return (
    <fieldset className="mt-3">
      <legend className="text-xl font-semibold text-yellow-400 drop-shadow-2xl">{name}</legend>
      <div className="inline-flex flex-wrap items-center">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;

          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div
                className={`p-2 mt-3 text-lg block cursor-pointer mr-3 shadow-md bg-green-700 rounded-2xl shadow-yellow-500 ${
                  checked
                    ? "text-yellow-400 bg-green-700"
                    : "text-yellow-400 bg-green-700"
                }`}
              >
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default ProductOptions;
