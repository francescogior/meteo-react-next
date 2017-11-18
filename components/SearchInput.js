export default ({
  placeholder,
  value,
  onChange
}) => (
  <div>
    <style jsx>{`
      .SearchInput {
        height: 50px;
        font-size: 32px;
        line-height: 50px;
        width: 100%;
        border: 0;
        color: white;
        background: rgba(0, 0, 0, .1);
        padding: 0 20px;
      }
      .SearchInput::placeholder {
        color: rgba(255, 255, 255, .7);
      }
      .SearchInput:focus {
          outline: none;
        }
      }
    `}</style>
    <input
      className='SearchInput'
      placeholder={placeholder}
      value={value}
      onChange={e => { onChange(e.target.value) }}
    />
  </div>
)