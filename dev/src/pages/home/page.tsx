
import { useState } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/f9e6cd520aaf6f718ff3908d215f14ca/192d0bd38111331ccf22c868974869b5.png"
                alt="CAMINOVA ACE"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('vision')} className="text-black hover:text-yellow-600 transition-colors cursor-pointer whitespace-nowrap">ビジョン</button>
              <button onClick={() => scrollToSection('services')} className="text-black hover:text-yellow-600 transition-colors cursor-pointer whitespace-nowrap">サービス</button>
              <button onClick={() => scrollToSection('strengths')} className="text-black hover:text-yellow-600 transition-colors cursor-pointer whitespace-nowrap">強み</button>
              <button onClick={() => scrollToSection('members')} className="text-black hover:text-yellow-600 transition-colors cursor-pointer whitespace-nowrap">メンバー</button>
              <button onClick={() => scrollToSection('contact')} className="text-black hover:text-yellow-600 transition-colors cursor-pointer whitespace-nowrap">会社概要</button>
            </nav>
            <button className="md:hidden text-black">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20technology%20office%20environment%20with%20sleek%20black%20and%20gold%20design%20elements%2C%20professional%20software%20development%20workspace%20with%20multiple%20monitors%20displaying%20code%2C%20contemporary%20corporate%20interior%20with%20glass%20panels%20and%20metallic%20accents%2C%20high-tech%20atmosphere%20with%20warm%20golden%20lighting%2C%20minimalist%20design%20aesthetic%2C%20professional%20business%20setting&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
          }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            創る、つなぐ、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">進化させる</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            現場で鍛えた技術力で、お客様のビジネスを次のステージへ
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              サービスを見る
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all cursor-pointer whitespace-nowrap"
            >
              お問い合わせ
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-yellow-400 text-3xl"></i>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20technology%20network%20connections%20with%20golden%20light%20rays%20and%20geometric%20patterns%2C%20futuristic%20digital%20grid%20background%20with%20black%20and%20gold%20color%20scheme%2C%20modern%20corporate%20technology%20visualization%20with%20interconnected%20nodes%20and%20flowing%20data%20streams%2C%20sophisticated%20tech%20aesthetic%20with%20metallic%20gold%20accents&width=1920&height=800&seq=vision-bg&orientation=landscape')`
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mb-4">
                ACE
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">3つの価値を軸に新たな挑戦を始める会社です。</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              「創る、つなぐ、進化させる」<br />
              技術と創造力を融合させ、お客様の業務のIT化を通じて事業成長を支援します。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Advance */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <i className="ri-rocket-line text-3xl text-black"></i>
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">A</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Advance</h3>
                  <div className="text-sm text-yellow-400 font-medium mb-4">前進・進化</div>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  最新技術を駆使し、常に一歩先を行くソリューションを提供。お客様のビジネスを次のレベルへと押し上げます。
                </p>
              </div>
            </div>

            {/* Connect */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <i className="ri-links-line text-3xl text-black"></i>
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">C</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Connect</h3>
                  <div className="text-sm text-yellow-400 font-medium mb-4">つなぐ</div>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  システム間の連携、チーム間のコミュニケーション、お客様との信頼関係。すべてを繋ぎ、価値を創造します。
                </p>
              </div>
            </div>

            {/* Engineering */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <i className="ri-settings-3-line text-3xl text-black"></i>
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">E</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Engineering</h3>
                  <div className="text-sm text-yellow-400 font-medium mb-4">技術</div>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  確かな技術力と豊富な経験に基づく、堅実で信頼性の高いエンジニアリングを実践します。
                </p>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">製品・サービス</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>
            <p className="text-lg text-gray-600 font-light tracking-wide">Products &amp; Services</p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mt-6 leading-relaxed">
              幅広い技術領域で、お客様のニーズに応える包括的なソリューションを提供
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* 販売・アフターサービス領域のDX支援 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 hover:transform hover:scale-105">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20business%20illustration%20showing%20digital%20transformation%20in%20sales%20and%20after-sales%20service%2C%20modern%20line%20art%20style%20with%20business%20person%20at%20computer%20managing%20customer%20relationships%2C%20shopping%20cart%20and%20delivery%20truck%20icons%2C%20clean%20minimalist%20design%20with%20white%20background%20and%20gold%20accents%2C%20corporate%20illustration%20style%20with%20bright%20white%20background&width=256&height=256&seq=sales-dx-service-white&orientation=squarish"
                    alt="販売DX支援"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 leading-tight">販売・アフターサービス<br />領域のDX支援</h3>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                <p>受発注、在庫、整備履歴管理、</p>
                <p>顧客ポータル、営業支援など</p>
              </div>
            </div>

            {/* 業務システム開発・カスタマイズ */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 hover:transform hover:scale-105">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Business%20system%20development%20illustration%20showing%20professional%20woman%20working%20on%20custom%20software%20development%2C%20computer%20screen%20with%20settings%20and%20configuration%20interface%2C%20modern%20corporate%20line%20art%20style%2C%20clean%20minimalist%20design%20with%20bright%20white%20background%20and%20gold%20accents%2C%20professional%20atmosphere%20with%20white%20background&width=256&height=256&seq=system-development-white&orientation=squarish"
                    alt="業務システム開発"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 leading-tight">業務システム開発・<br />カスタマイズ</h3>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                <p>現場の業務フローに合わせた</p>
                <p>オーダーメイド開発</p>
              </div>
            </div>

            {/* Webサービス・ECサイト構築 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 hover:transform hover:scale-105">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Web%20service%20and%20e-commerce%20development%20illustration%20showing%20computer%20monitor%20with%20website%20interface%20and%20performance%20optimization%20icons%2C%20modern%20digital%20service%20design%2C%20clean%20line%20art%20style%20with%20bright%20white%20background%20and%20gold%20accents%2C%20professional%20business%20atmosphere%20with%20white%20background&width=256&height=256&seq=web-service-white&orientation=squarish"
                    alt="Webサービス構築"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 leading-tight">Webサービス・<br />ECサイト構築</h3>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                <p>法人・BtoB向けサイトから</p>
                <p>顧客参加型Webサービスまで</p>
              </div>
            </div>

            {/* システム環境構築 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 hover:transform hover:scale-105">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <img 
                    src="https://readdy.ai/api/search-image?query=System%20infrastructure%20and%20cloud%20environment%20illustration%20showing%20network%20connections%2C%20server%20architecture%2C%20and%20cloud%20computing%20icons%2C%20modern%20technical%20illustration%20with%20professional%20design%2C%20clean%20line%20art%20style%20with%20bright%20white%20background%20and%20gold%20accents%2C%20corporate%20atmosphere%20with%20white%20background&width=256&height=256&seq=system-infrastructure-white&orientation=squarish"
                    alt="システム環境構築"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 leading-tight">システム環境構築</h3>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                <p>サーバー（オンプレ/クラウド）、</p>
                <p>ネットワーク、セキュリティ設定、</p>
                <p>運用監視、バックアップ体制</p>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">現場力×技術力</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>
            <p className="text-lg text-gray-600 font-light tracking-wide mb-2">Field &amp; Engineering</p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              〜現場で鍛えた頼れるエンジニア集団〜
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-12">
              {/* 机上の理論より現場感覚 */}
              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:rotate-12 transition-transform duration-500">
                    <i className="ri-lightbulb-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-600 mb-3">机上の理論より現場感覚</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      長年現場に入り込み、泥くさいほど課題と向き合ってきたメンバーばかり。
                    </p>
                  </div>
                </div>
              </div>

              {/* 話が通じる技術者 */}
              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:rotate-12 transition-transform duration-500">
                    <i className="ri-chat-3-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-600 mb-3">話が通じる技術者</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      専門用語ばかり並べず、「どうしたら現場が回るか」を一緒に考える。
                    </p>
                  </div>
                </div>
              </div>

              {/* 不器用なくらいまっすぐ */}
              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:rotate-12 transition-transform duration-500">
                    <i className="ri-shield-check-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-600 mb-3">不器用なくらいまっすぐ</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      器用な営業トークはできませんが、作ったシステムには責任を持ち最後まで面倒を見ます。
                    </p>
                  </div>
                </div>
              </div>

              {/* 人と人のつながりを大事に */}
              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:rotate-12 transition-transform duration-500">
                    <i className="ri-team-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-600 mb-3">人と人のつながりを大事に</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      グループの仲間やパートナーと力を合わせて、必要なものをちゃんと形にします。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20software%20development%20team%20working%20together%20in%20modern%20office%20environment%2C%20experienced%20engineers%20collaborating%20on%20computer%20screens%20with%20code%2C%20diverse%20group%20of%20skilled%20developers%20in%20contemporary%20workspace%20with%20black%20and%20gold%20design%20elements%2C%20teamwork%20and%20expertise%20in%20technology%20industry%2C%20high-quality%20professional%20photography%20with%20bright%20clean%20background&width=600&height=500&seq=team-strength-updated&orientation=landscape"
                  alt="現場で鍛えたエンジニア集団"
                  className="rounded-2xl object-cover w-full h-80"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">20+</div>
                    <div className="text-sm text-black font-medium">年の経験</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">メンバー</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              豊富な経験と確かな技術力を持つメンバーが、お客様のプロジェクトを成功に導きます
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 text-center border border-yellow-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-line text-3xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">山本 裕司</h3>
              <p className="text-yellow-400 mb-2">代表</p>
              <p className="text-gray-300 text-sm mb-4">Engineer</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                豊富な経験と確かな技術力で、会社全体の方向性を決定し、プロジェクトの成功に導きます。
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-center border border-yellow-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-line text-3xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">池田 幸輔</h3>
              <p className="text-yellow-400 mb-2">最高技術責任者</p>
              <p className="text-gray-300 text-sm mb-4">Engineer</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                最新技術のトレンドを把握し、技術的な課題解決と品質向上を担当しています。
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-center border border-yellow-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-line text-3xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">森田 レオ</h3>
              <p className="text-yellow-400 mb-2">取締役</p>
              <p className="text-gray-300 text-sm mb-4">Engineer</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                外部の視点から技術的なアドバイスを提供し、エンジニアリング戦略をサポートします。
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-center border border-yellow-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-line text-3xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">北口 明子</h3>
              <p className="text-yellow-400 mb-2">取締役</p>
              <p className="text-gray-300 text-sm mb-4">Sales</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                営業戦略の立案と顧客開拓を担当し、ビジネス成長を推進します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmen Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20software%20development%20team%20working%20together%20in%20modern%20bright%20office%20environment%2C%20experienced%20engineers%20collaborating%20around%20wooden%20table%20with%20laptops%2C%20diverse%20group%20of%20skilled%20developers%20in%20contemporary%20workspace%20with%20clean%20white%20and%20bright%20design%2C%20teamwork%20and%20expertise%20in%20technology%20industry%2C%20high-quality%20professional%20photography%20with%20bright%20clean%20white%20background%2C%20modern%20office%20interior%20with%20large%20windows&width=600&height=500&seq=craftsmen-team&orientation=landscape"
                  alt="技術も現場も知っている職人チーム"
                  className="rounded-2xl object-cover w-full h-80"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  技術も現場も知っている<br />
                  <span className="text-yellow-600">"職人チーム"</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6"></div>
                <p className="text-lg text-gray-600 font-light tracking-wide mb-8">Craftsmen</p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  CAMINOVA ACEのメンバーは、平均20年以上の経験を持つベテランエンジニア。
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  サーバーやネットワークの構築から、業務システムやWebサービスの開発まで、「やったことがないからできない」より「やったことないけど、やってみるか！」が口グセ。
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  案件ごとに最適なチームを編成し、必要ならパートナーにも声をかけ、現場にフィットする環境とシステムを作り上げます。
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  仕上げた後も「調子どう？」と顔を出す、そんな距離感を大事にしています。
                </p>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">会社概要・お問い合わせ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              お気軽にお問い合わせください。お客様のプロジェクトについてご相談をお待ちしております。
            </p>
          </div>
          
          {/* 会社概要テーブル */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-8 text-center flex items-center justify-center">
              <i className="ri-building-line text-yellow-500 mr-3"></i>
              会社概要
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex">
                    <div className="w-32 text-gray-700 font-medium">会社名</div>
                    <div className="flex-1 text-gray-900">株式会社カミノバエース</div>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex">
                    <div className="w-32 text-gray-700 font-medium">英文社名</div>
                    <div className="flex-1 text-gray-900">CAMINOVA ACE</div>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex">
                    <div className="w-32 text-gray-700 font-medium">設立</div>
                    <div className="flex-1 text-gray-900">2025年10月</div>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex">
                    <div className="w-32 text-gray-700 font-medium">代表者</div>
                    <div className="flex-1 text-gray-900">山本 裕司</div>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex">
                    <div className="w-32 text-gray-700 font-medium">資本金</div>
                    <div className="flex-1 text-gray-900">500万円<br /><span className="text-sm text-gray-600">（カミノバグループホールディングス 100％出資）</span></div>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex">
                    <div className="w-32 text-gray-700 font-medium">事業内容</div>
                    <div className="flex-1 text-gray-900">システム開発、Webサービス開発、<br />サーバー・ネットワーク環境構築</div>
                  </div>
                </div>
                <div className="">
                  <div className="flex">
                    <div className="w-32 text-gray-700 font-medium">ウェブサイト</div>
                    <div className="flex-1">
                      <a 
                        href="https://ace.caminova.co.jp/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-600 hover:text-yellow-700 cursor-pointer"
                      >
                        https://ace.caminova.co.jp/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-gray-700 font-medium mb-3">所在地</div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-gray-900 mb-2">本社</div>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        〒780-0056<br />
                        高知県高知市北本町一丁目10番31号<br />
                        高知八州ビル3F<br />
                        TEL: 088-854-6022
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-2">大阪Lab</div>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        〒556-0022<br />
                        大阪府大阪市浪速区桜川1-1-28<br />
                        三宝ビル4A<br />
                        TEL: 06-6575-9308
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="">
                  <div className="text-gray-700 font-medium mb-3">グループ企業</div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• 株式会社カミノバグループホールディングス</div>
                    <div>• 株式会社カミノバ</div>
                    <div>• 株式会社カミノバマーケティング</div>
                    <div>• 株式会社カミノバ・バサラ</div>
                    <div>• 株式会社ハートステップ・カミノバ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/95 backdrop-blur-sm py-12 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="https://static.readdy.ai/image/f9e6cd520aaf6f718ff3908d215f14ca/192d0bd38111331ccf22c868974869b5.png"
                alt="CAMINOVA ACE"
                className="h-10 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-sm">
                © 2025 株式会社カミノバエース. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
