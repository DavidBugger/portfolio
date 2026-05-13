import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a', // Dark background matching the logo image
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
        }}>
          {[...Array(9)].map((_, i) => (
            <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f97316' }} />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
