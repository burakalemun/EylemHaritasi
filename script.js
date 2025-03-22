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

  const darkRedCities = [
    'istanbul', 'ankara', 'izmir',
  ];

  const RedCities = [
    'adana', 'antalya', 'eskisehir', 'mersin', 'mugla', 'bursa', 'aydin', 'trabzon', 'corum',
    'konya', 'adapazari', 'amasya', 'giresun', 'rize', 'kirikkale', 'karabuk'
  ]

  const lightRedCities = [
    'artvin', 'ordu', 'samsun', 'kirsehir', 'gaziantep', 'nigde', 'kayseri', 'tunceli', 'balikesir',
    'canakkale', 'denizli', 'manisa', 'kutahya', 'isparta', 'izmit', 'tekirdag', 'edirne', 'hatay',
    'usak', 'kilis', 'malatya', 'elazig', 'erzincan', 'bartin', 'zonguldak', 'bolu', 'sinop', 'kastamonu',
    'tokat', 'sivas', 'kars', 'yozgat', 'afyon', 'bilecik', 'burdur', 'karaman', 'osmaniye', 'kahramanmaras',
    'adiyaman', 'diyarbakir', 'ardahan', 'igdir', 'urfa', 'batman', 'kirklareli', 'duzce', 'nevsehir', 'aksaray',
    'cankiri', 'yalova'
  ]


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

    if (darkRedCities.includes(cityId)) {
      cityPath?.style && (cityPath.style.fill = '#730008');
    }

    if (RedCities.includes(cityId)) {
      cityPath?.style && (cityPath.style.fill = '#c00b00');
    }

    if (lightRedCities.includes(cityId)) {
      cityPath?.style && (cityPath.style.fill = '#ff0025');
    }

    if (cityPath) {
      cityPath.addEventListener('mouseover', (event) => {
        const tooltipElement = document.getElementById(`tooltip-${cityId}`);
        const maxX = window.innerWidth - tooltipElement.offsetWidth - 10;
        const maxY = window.innerHeight - tooltipElement.offsetHeight - 10;

        tooltipElement.style.left = Math.min(event.pageX + 10, maxX) + 'px';
        tooltipElement.style.top = Math.min(event.pageY + 10, maxY) + 'px';
        tooltipElement.classList.add('show');
      });

      cityPath.addEventListener('mouseout', () => {
        const tooltipElement = document.getElementById(`tooltip-${cityId}`);
        tooltipElement.classList.remove('show');
      });
    } else {
      console.warn(`${cityId} için SVG path bulunamadı!`);
    }
  });
});
