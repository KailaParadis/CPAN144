import React from 'react';
import Header from '../components/Header';
const generateChartUrl = () => {
  const chartConfig = {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Temperature',
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointRadius: 5,
          data: [7, 7, 9.5, 14.5, 18, 22, 25.5],
          pointStyle: [null, null, null, null, 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png']
        },
        {
          label: 'Humidity',
          fill: false,
          borderColor: 'rgba(192,192,75,1)',
          pointBackgroundColor: '#fff',
          pointRadius: 5,
          data: [4, 4.5, 6, 8, 12, 5, 6],
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  return `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify(chartConfig))}`;
};

const Dashboard = () => {
  const chartUrl = generateChartUrl();

  return (
    <div className="w-[1280px] h-[1214px] bg-white flex-col justify-start items-start inline-flex">
      <div className="self-stretch h-[1214px] bg-white flex-col justify-start items-start flex">
        <div className="self-stretch h-[1214px] flex-col justify-start items-start flex">
            <Header />
          <div className="self-stretch h-[1149px] px-40 py-5 justify-center items-start inline-flex">
            <div className="w-[960px] py-5 flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-[76px] px-4 pt-6 pb-3 flex-col justify-start items-center flex">
                <div className="self-stretch text-center text-[#111616] text-[32px] font-bold font-['Plus Jakarta Sans'] leading-10">You are in Toronto, ON</div>
              </div>
              <div className="self-stretch h-[72px] px-4 py-3 flex-col justify-start items-start flex">
                <div className="self-stretch h-12 flex-col justify-start items-start flex">
                  <div className="self-stretch grow shrink basis-0 rounded-xl justify-start items-start inline-flex">
                    <div className="self-stretch pl-4 bg-[#eff2f4] rounded-tl-xl rounded-bl-xl justify-center items-center flex">
                      <div className="h-6 relative">
                        <div className="w-5 h-5 left-0 top-0 absolute" />
                      </div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch pl-2 pr-4 py-2 bg-[#eff2f4] rounded-tr-xl rounded-br-xl justify-start items-center flex">
                         <input type="text" placeholder="Search for another location" className="w-full h-full bg-[#eff2f4] border-none outline-none text-[#111616] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]"/>
                            <button><div className="h-6 relative">
                                <div className="w-5 h-5 left-0 top-0 absolute" />
                                <i className="fas fa-search text-[#111616] text-lg" />
                                </div></button>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[47px] px-4 pt-4 pb-2 flex-col justify-start items-start flex">
                <div className="self-stretch text-[#111616] text-lg font-bold font-['Plus Jakarta Sans'] leading-[23px]">Current Metrics</div>
              </div>
              <div className="self-stretch h-[203px] p-4 flex-col justify-start items-start flex">
                <div className="self-stretch rounded-xl justify-between items-start inline-flex">
                  <div className="w-[608px] h-[171px] flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                      <div className="self-stretch text-[#637c87] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">Toronto</div>
                    </div>
                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                      <div className="self-stretch text-[#637c87] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">Sunny, 24°C</div>
                    </div>
                  </div>
                  <img className="h-[171px] relative rounded-xl" src="https://via.placeholder.com/320x171" alt="Weather" />
                </div>
              </div>
              <div className="self-stretch h-[47px] px-4 pt-4 pb-2 flex-col justify-start items-start flex">
                <div className="self-stretch text-[#111616] text-lg font-bold font-['Plus Jakarta Sans'] leading-[23px]">Today</div>
              </div>
              <div className="self-stretch h-[217px] p-4 flex-col justify-start items-start flex">
                <div className="self-stretch py-2 justify-between items-start inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-[#637c87] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">Sunrise</div>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-right text-[#111616] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">6:42 am</div>
                  </div>
                </div>
                <div className="self-stretch py-2 justify-between items-start inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-[#637c87] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">Sunset</div>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-right text-[#111616] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">7:57 pm</div>
                  </div>
                </div>
                <div className="self-stretch py-2 justify-between items-start inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-[#637c87] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">Wind Speed</div>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-right text-[#111616] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">8 mph</div>
                  </div>
                </div>
                <div className="self-stretch py-2 justify-between items-start inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-[#637c87] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">Humidity</div>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-right text-[#111616] text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">58%</div>
                  </div>
                </div>
              </div>
                <div className="self-stretch h-[47px] px-4 pt-4 pb-2 flex-col justify-start items-start flex">
                    <div className="self-stretch text-[#111616] text-lg font-bold font-['Plus Jakarta Sans'] leading-[23px]">This Week</div>
                    <div className="self-stretch h-[400px] p-4 flex-col justify-start items-start flex">
                        <img src={chartUrl} alt="Weather Chart" />
                        </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
