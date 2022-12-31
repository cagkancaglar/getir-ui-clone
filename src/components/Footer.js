import Menu from "./ui/Menu";

export default function Footer() {
  
  const menus = [
    {
      "title": "Getir'i Keşfedin",
      "items": [
        {
          "title" : "Hakkımızda"
        },
        {
          "title" : "Kariyer"
        },
        {
          "title" : "İletişim"
        },
        {
          "title" : "COVID-19 Duyuru"
        },
        {
          "title" : "Sosyal Sorumluluk Projeleri"
        },
      ]
    },
    {
      "title": "Yardıma mı ihtiyacınız var?",
      "items": [
        {
          "title" : "Hakkımızda"
        },
        {
          "title" : "Kariyer"
        },
        {
          "title" : "İletişim"
        },
        {
          "title" : "COVID-19 Duyuru"
        },
        {
          "title" : "Sosyal Sorumluluk Projeleri"
        },
      ]
    },
    {
      "title": "İş Ortağımız Olun",
      "items": [
        {
          "title" : "Hakkımızda"
        },
        {
          "title" : "Kariyer"
        },
        {
          "title" : "İletişim"
        },
        {
          "title" : "COVID-19 Duyuru"
        },
        {
          "title" : "Sosyal Sorumluluk Projeleri"
        },
      ]
    }
  ]
  
  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <nav className="gap-y-4 grid ">
            <h6 className="text-primary-brand-color font-semibold text-lg">Getir'i indirin!</h6>
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="AppStore" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="AppStore" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="AppStore" />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => <Menu key={index} {...menu}/> )}
        </div>
      </div>
    </div>
  );
}
