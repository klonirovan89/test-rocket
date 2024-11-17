import iconSprite from '../../assets/icons/icons-sprite.svg'

type IconPropsType = {
  height: string
  iconId: string
  width: string
  className?: string
}

export const Icon = ({height, iconId, width, className}: IconPropsType) => {

  return (
    <svg height={height} width={width} className={className}>
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  )
}


