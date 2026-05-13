import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}>
          {[...Array(9)].map((_, i) => (
            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f97316' }} />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
