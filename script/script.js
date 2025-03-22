document.addEventListener('DOMContentLoaded', () => {
  const cities = {
    'kirklareli': 'Kırklareli',
    'edirne': 'Edirne',
    'sinop': 'Sinop',
    'kastamonu': 'Kastamonu',
    'bartin': 'Bartın',
    'istanbul': 'İstanbul',
    'tekirdag': 'Tekirdağ',
    'ardahan': 'Ardahan',
    'samsun': 'Samsun',
    'artvin': 'Artvin',
    'zonguldak': 'Zonguldak',
    'karabuk': 'Karabük',
    'rize': 'Rize',
    'kars': 'Kars',
    'izmit': 'İzmit',
    'corum': 'Çorum',
    'adapazari': 'Adapazarı',
    'duzce': 'Düzce',
    'ordu': 'Ordu',
    'trabzon': 'Trabzon',
    'erzurum': 'Erzurum',
    'cankiri': 'Çankırı',
    'bolu': 'Bolu',
    'amasya': 'Amasya',
    'giresun': 'Giresun',
    'tokat': 'Tokat',
    'yalova': 'Yalova',
    'gumushane': 'Gümüşhane',
    'balikesir': 'Balıkesir',
    'bursa': 'Bursa',
    'canakkale': 'Çanakkale',
    'ankara': 'Ankara',
    'bilecik': 'Bilecik',
    'bayburt': 'Bayburt',
    'sivas': 'Sivas',
    'igdir': 'Iğdır',
    'kirikkale': 'Kırıkkale',
    'eskisehir': 'Eskişehir',
    'agri': 'Ağrı',
    'yozgat': 'Yozgat',
    'erzincan': 'Erzincan',
    'kutahya': 'Kütahya',
    'kirsehir': 'Kırşehir',
    'izmir': 'İzmir',
    'hatay': 'Hatay',
    'kilis': 'Kilis',
    'mersin': 'Mersin',
    'antalya': 'Antalya',
    'gaziantep': 'Gaziantep',
    'karaman': 'Karaman',
    'osmaniye': 'Osmaniye',
    'mardin': 'Mardin',
    'mugla': 'Muğla',
    'burdur': 'Burdur',
    'sirnak': 'Şırnak',
    'urfa': 'Şanlıurfa',
    'hakkari': 'Hakkari',
    'adiyaman': 'Adıyaman',
    'aydin': 'Aydın',
    'adana': 'Adana',
    'siirt': 'Siirt',
    'nigde': 'Niğde',
    'isparta': 'Isparta',
    'kahramanmaras': 'Kahramanmaraş',
    'denizli': 'Denizli',
    'batman': 'Batman',
    'diyarbakir': 'Diyarbakır',
    'aksaray': 'Aksaray',
    'usak': 'Uşak',
    'malatya': 'Malatya',
    'bitlis': 'Bitlis',
    'elazig': 'Elazığ',
    'konya': 'Konya',
    'kayseri': 'Kayseri',
    'afyon': 'Afyon',
    'nevsehir': 'Nevşehir',
    'bingol': 'Bingöl',
    'mus': 'Muş',
    'van': 'Van',
    'tunceli': 'Tunceli',
    'manisa': 'Manisa'
  };

  const citiesData = window.citiesData || {};
  const tooltipsContainer = document.getElementById("tooltips-container");

  const darkRedCities = ['istanbul', 'ankara', 'izmir'];
  const RedCities = ['adana', 'antalya', 'eskisehir', 'mersin', 'mugla', 'bursa', 'aydin', 'trabzon', 'corum', 'konya', 'adapazari', 'amasya', 'giresun', 'rize', 'kirikkale', 'karabuk'];
  const lightRedCities = [
    'artvin', 'ordu', 'samsun', 'kirsehir', 'gaziantep', 'nigde', 'kayseri', 'tunceli', 'balikesir',
    'canakkale', 'denizli', 'manisa', 'kutahya', 'isparta', 'izmit', 'tekirdag', 'edirne', 'hatay',
    'usak', 'kilis', 'malatya', 'elazig', 'erzincan', 'bartin', 'zonguldak', 'bolu', 'sinop', 'kastamonu',
    'tokat', 'sivas', 'kars', 'yozgat', 'afyon', 'bilecik', 'burdur', 'karaman', 'osmaniye', 'kahramanmaras',
    'adiyaman', 'diyarbakir', 'ardahan', 'igdir', 'urfa', 'batman', 'kirklareli', 'duzce', 'nevsehir', 'aksaray',
    'cankiri', 'yalova', 'erzurum',
  ];

  function positionTooltip(tooltipElement, x, y) {
    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipHeight = tooltipElement.offsetHeight;

    const padding = 10;
    const maxX = window.innerWidth - tooltipWidth - padding;
    const maxY = window.innerHeight - tooltipHeight - padding;

    const posX = Math.min(x + 10, maxX);
    const posY = Math.min(y + 10, maxY);

    tooltipElement.style.left = posX + 'px';
    tooltipElement.style.top = posY + 'px';
  }

  Object.keys(cities).forEach(cityId => {
    const cityName = cities[cityId];

    const tooltip = document.createElement('div');
    tooltip.classList.add('city-tooltip');
    tooltip.id = `tooltip-${cityId}`;

    tooltip.innerHTML = `
      <strong>${cityName}</strong><br>
      Nüfus: ${citiesData[cityId]?.population || 'Bilinmiyor'}<br>
      Etkinlik Sayısı: ${citiesData[cityId]?.eventCount || 'Bilinmiyor'}<br>
      <div class="data-info">${citiesData[cityId]?.additionalInfo || 'Ekstra bilgi mevcut değil.'}</div>
    `;

    tooltipsContainer.appendChild(tooltip);

    const cityPath = document.getElementById(cityId);
    if (!cityPath) {
      console.warn(`${cityId} için SVG path bulunamadı!`);
      return;
    }

    if (darkRedCities.includes(cityId)) {
      cityPath.style.fill = '#730008';
    } else if (RedCities.includes(cityId)) {
      cityPath.style.fill = '#c00b00';
    } else if (lightRedCities.includes(cityId)) {
      cityPath.style.fill = '#ff0025';
    }

    const tooltipElement = document.getElementById(`tooltip-${cityId}`);

    cityPath.addEventListener('mouseover', (event) => {
      positionTooltip(tooltipElement, event.clientX, event.clientY);
      tooltipElement.classList.add('show');
    });

    cityPath.addEventListener('mousemove', (event) => {
      positionTooltip(tooltipElement, event.clientX, event.clientY);
    });

    cityPath.addEventListener('mouseout', () => {
      tooltipElement.classList.remove('show');
    });

    cityPath.addEventListener('touchstart', (event) => {
      const touch = event.touches[0];
      positionTooltip(tooltipElement, touch.clientX, touch.clientY);
      tooltipElement.classList.add('show');
    });

    cityPath.addEventListener('touchmove', (event) => {
      const touch = event.touches[0];
      positionTooltip(tooltipElement, touch.clientX, touch.clientY);
    });

    cityPath.addEventListener('touchend', () => {
      tooltipElement.classList.remove('show');
    });
  });
});
