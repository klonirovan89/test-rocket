import iconSprite from '../../assets/icons/icons-sprite.svg'

export const Icon = ({height, iconId, width}: IconPropsType) => {

  return (
    <svg height={height} width={width}>
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  )
}

type IconPropsType = {
  height: string
  iconId: string
  width: string
}
