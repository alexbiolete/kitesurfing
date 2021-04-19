import Label from '../Atoms/Label'
import InputText from '../Atoms/InputText'

const WrapperInput = ({ id, title, placeholder }) => {
  return (
    <div className="w-full flex flex-col items-start space-y-1">
      <Label
        id={id}
        title={title}
      />
      <InputText id={id} placeholder={placeholder} />
    </div>
  )
}

export default WrapperInput
