import Image from 'next/image'

export default function VestaLogo({ height = 36 }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: height * 0.3,
      padding: `${height * 0.1}px ${height * 0.2}px`,
      display: 'inline-flex',
      alignItems: 'center',
    }}>
      <Image
        src="/logo.png"
        alt="Vesta"
        height={height}
        width={height * 2.8}
        style={{ objectFit: 'contain', display: 'block' }}
        priority
      />
    </div>
  )
}
