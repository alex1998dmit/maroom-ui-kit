import React from 'react'

type Props = {
  width: number
  height: number
}

const ChevronIcon = (props: Props) => {
  const { width, height } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.5764 12L8.61104 16.9654C8.2763 17.3001 8.2763 17.8428 8.61104 18.1775C8.94577 18.5123 9.48848 18.5123 9.82322 18.1775L15.3946 12.6061C15.7294 12.2714 15.7294 11.7287 15.3946 11.3939L9.82322 5.82249C9.48848 5.48776 8.94577 5.48776 8.61104 5.82249C8.2763 6.15723 8.2763 6.69994 8.61104 7.03468L13.5764 12Z'
        fill='#7F8285'
      />
    </svg>
  )
}

ChevronIcon.defaultProps = {
  width: 24,
  height: 24
}

export default ChevronIcon
