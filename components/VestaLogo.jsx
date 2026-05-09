import BASE_PATH from '../lib/basePath'

export default function VestaLogo({ height = 36 }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: height * 0.3,
      padding: `${height * 0.1}px ${height * 0.2}px`,
      display: 'inline-flex',
      alignItems: 'center',
    }}>
      <img
        src={`${BASE_PATH}/logo.png`}
        alt="Vesta"
        height={height}
        style={{ objectFit: 'contain', display: 'block', width: 'auto' }}
      />
    </div>
  )
}
