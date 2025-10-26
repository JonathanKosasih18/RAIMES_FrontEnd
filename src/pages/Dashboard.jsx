import Navbar from '../components/Navbar';

function Dashboard() {
  const companies = [
    {
      no: 1,
      name: 'PT Tambang Sejahtera',
      progress: 100,
      status: 'Belum dinilai',
      aiScore: 82,
      action: 'Nilai Sekarang',
      actionStyle: 'yellow'
    },
    {
      no: 2,
      name: 'PT Batu Energi',
      progress: 100,
      status: 'Sudah dinilai',
      aiScore: 90,
      action: 'Lihat Detail',
      actionStyle: 'yellow-outline'
    },
    {
      no: 3,
      name: 'PT Mineral Nusantara',
      progress: 75,
      status: 'Dalam proses',
      aiScore: '-',
      action: 'Menunggu',
      actionStyle: 'gray'
    },
    {
      no: 4,
      name: 'PT Adhi Sukma',
      progress: 50,
      status: 'Dalam proses',
      aiScore: '-',
      action: 'Menunggu',
      actionStyle: 'gray'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="px-8 py-8">
        <h1 className="text-4xl font-bold text-[var(--color-raimes-purple)] mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow">
            <h2 className="text-xl font-semibold text-[var(--color-raimes-purple)] mb-4">
              Questionnaire Progress
            </h2>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-[var(--color-raimes-yellow)] h-4 rounded-full"
                  style={{ width: '66.67%' }}
                ></div>
              </div>
            </div>
            <p className="text-[var(--color-raimes-purple)]">
              10 out of 15 companies have filled in
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow flex items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <svg
                className="w-24 h-24 mb-2"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M50 10 L90 90 L10 90 Z"
                  stroke="#DC2626"
                  strokeWidth="4"
                  fill="none"
                />
                <text
                  x="50"
                  y="70"
                  fontSize="32"
                  fontWeight="bold"
                  fill="#DC2626"
                  textAnchor="middle"
                >
                  !
                </text>
              </svg>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[var(--color-raimes-purple)]">2</div>
              <div className="text-[var(--color-raimes-purple)] font-semibold">
                Data is not valid!!
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow flex items-center justify-center gap-6">
            <svg
              className="w-24 h-24"
              viewBox="0 0 100 100"
              fill="var(--color-raimes-yellow)"
            >
              <path d="M50 20 C50 20, 60 25, 60 35 L60 55 C60 60, 55 65, 50 65 C45 65, 40 60, 40 55 L40 35 C40 25, 50 20, 50 20 Z" />
              <circle cx="50" cy="75" r="8" />
            </svg>
            <div className="text-center">
              <div className="text-6xl font-bold text-[var(--color-raimes-purple)]">0</div>
              <div className="text-[var(--color-raimes-purple)] font-semibold">
                Notification
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-raimes-purple)] text-white">
                <th className="px-6 py-4 text-left font-semibold">No</th>
                <th className="px-6 py-4 text-left font-semibold">Company Name</th>
                <th className="px-6 py-4 text-left font-semibold">Progress</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">AI Score</th>
                <th className="px-6 py-4 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr
                  key={company.no}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-6 py-4 text-[var(--color-raimes-purple)]">
                    {company.no}
                  </td>
                  <td className="px-6 py-4 text-[var(--color-raimes-purple)] font-medium">
                    {company.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[120px]">
                        <div
                          className="bg-[var(--color-raimes-yellow)] h-2 rounded-full"
                          style={{ width: `${company.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-[var(--color-raimes-purple)] font-medium">
                        {company.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[var(--color-raimes-purple)]">
                    {company.status}
                  </td>
                  <td className="px-6 py-4 text-[var(--color-raimes-purple)] font-bold text-lg">
                    {company.aiScore}
                  </td>
                  <td className="px-6 py-4">
                    {company.actionStyle === 'yellow' && (
                      <button className="px-6 py-2 bg-[var(--color-raimes-yellow)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                        {company.action}
                      </button>
                    )}
                    {company.actionStyle === 'yellow-outline' && (
                      <button className="px-6 py-2 border-2 border-[var(--color-raimes-yellow)] text-[var(--color-raimes-yellow)] font-semibold rounded-lg hover:bg-[var(--color-raimes-yellow)] hover:text-white transition-colors">
                        {company.action}
                      </button>
                    )}
                    {company.actionStyle === 'gray' && (
                      <button className="px-6 py-2 bg-gray-400 text-white font-semibold rounded-lg cursor-not-allowed">
                        {company.action}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
