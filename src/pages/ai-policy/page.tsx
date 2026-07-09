const sections = [
  {
    title: "目的",
    body: "本方針は、AIの力を適正に活かしながら、お客様との信頼関係を築くための共通の約束事です。カミノバグループの行動規範である「顧客に信頼される関係の構築」「誠実さと正直さ」を基本とし、社会やお客様に対して私たちがどのようにAIと向き合っていくかを分かりやすくお伝えすることを目指します。",
  },
  {
    title: "適用範囲",
    body: "本方針は、カミノバグループのすべての役員および従業員、ならびに当グループが業務を委託する協力会社・外部パートナーに対し適用されます。企画・立案、システム・WEB開発、データ加工、デザイン・DTP、運用・保守、顧客サポート等、社内の日常業務からお客様への成果物提供に至るすべてのプロセスにおけるAI活用を対象とします。なお、本方針における「AI」には、文章、画像、プログラムコード等を自律的に生み出す「生成AI」を含みます。",
  },
  {
    title: "人を中心とした活用と責任",
    body: "AIは、人の能力を引き出し、業務や意思決定を支える「補助的な道具」として使います。過度にAIに頼ることはせず、カミノバグループのスタッフが持つ「創意工夫」を大切にします。最終的な内容の確認や成果物に対する責任は、常に人が負います。",
  },
  {
    title: "安全性と公平性の確保",
    body: "AIが作り出す情報には、事実と異なるまたは不適切な内容が含まれる可能性があります。そのため、出力された結果をそのまま使うのではなく、内容の正確さや目的との適合性を必ず人の目で確かめます。また、AIの学習データや出力には無意識の偏見が含まれることがあるため、行動規範の「ジェンダー・年齢に対する公平さと公正さ」に基づき、特定の個人や属性に対する差別を生み出さないよう、公平な活用を心がけます。",
  },
  {
    title: "プライバシーおよび機密情報の保護",
    body: "AIの利用においても、カミノバグループの「個人情報の取扱いについて」に基づき、個人の権利と利益を適切に保護します。お客様からご提供いただいた個人情報は、利用目的の範囲内でのみ利用し、ご本人の同意なく目的以外の利用や第三者への提供は行いません。AIツールを利用する際は、原則として「入力データが学習に利用されない環境（オプトアウト設定、法人向けプラン、API利用等）」を確保します。学習に利用される設定のままのAIサービスに対して、お客様の個人情報や当グループの機密情報を入力することは固く禁じます。",
  },
  {
    title: "知的財産権などの権利保護",
    body: "デザイン、プログラム、シナリオなどをAIを用いて作成する際は、既存の著作物や他者の権利を侵害しないよう、法令をしっかりと守ります。AIが作成したものを業務で使用したりお客様に提供したりする前には、他者の権利を侵害していないか十分に確認を行います。また、AIが生成した出力物をそのまま利用するのではなく、当グループのスタッフが加筆・修正等の「創作的な寄与」を加えることで、成果物の適法性と法的な権利を確保するよう努めます。",
  },
  {
    title: "情報の安全管理とお客様への透明性（説明責任）",
    body: "当グループの情報セキュリティの考え方に基づき、安全が確認された環境でのみAIを利用します。万が一、情報の漏洩や権利の侵害などの問題が起きた場合（またはその恐れがある場合）には、直ちに利用を止め、速やかに関係者へ報告・対応し、被害を防ぐための対策と原因の究明に取り組みます。また、業務においてAIを積極的に活用する（AI生成物が最終成果物に含まれる）プロジェクトにおいては、事前にお客様へその旨を明示し、権利の帰属や利用条件について適切な合意形成を図ります。お客様に安心していただくため、AIの利用に関するご質問には常に誠実にお答えします。",
  },
  {
    title: "教育と理解の向上",
    body: "AIを正しく、かつ安全に活かすためには、それを扱う「人」の深い理解と関与が不可欠です。カミノバグループは、すべての役員・従業員に対し、プライバシーや機密情報の保護、著作権等の知的財産権に関する法的な基礎知識に加え、AI特有の性質（出力の不確実性や偏りのリスク）を正しく理解するための教育を継続的に実施します。また、協力会社に対してもガイドラインの共有等を通じて同等の理解と運用を求めていきます。私たちは、現場の実務に根ざした学びと検証を重ねることで、より安全で価値の高いAI活用を追求します。また、日々の業務から得られる活用事例や最新の法動向（AIと著作権に関する考え方等）を踏まえ、社内ガイドラインや教育内容を定期的に見直し、常に実態に即したガバナンスの改善を図ります。",
  },
];

export default function AiPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://static.readdy.ai/image/f9e6cd520aaf6f718ff3908d215f14ca/192d0bd38111331ccf22c868974869b5.png"
                alt="CAMINOVA ACE"
                className="h-12 w-auto"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-black hover:text-yellow-600 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-arrow-left-line align-middle"></i> トップに戻る
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">AI活用</span>に関する基本方針
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            人間の尊厳を第一に、お客様に安心いただけるサービスを提供し続けるための、私たちの共通の約束事です。
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Policy Content */}
      <main className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Preamble */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
              <p className="text-gray-700 leading-loose text-base md:text-lg">
                カミノバグループは、「地域社会の活力を結集し、企業のDXにチャレンジする」という経営理念のもと、お客様に寄り添ったサービスを提供しています。AIの技術は、このDX推進を加速させ、社会の課題解決や持続可能な未来を創り出すための強力な手段となります。一方で、AIの利用には、情報の偏りや不確かさ、他者の権利を侵害してしまう危険性といった、社会に不安を与える側面も存在します。私たちは、人間の尊厳を第一に考え、これらの課題に誠実に向き合いながら、安心できるサービスの提供を続けるため、本方針を定めます。
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, index) => (
                <section key={index} className="flex gap-5 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-black mb-3">{section.title}</h2>
                    <p className="text-gray-700 leading-loose">{section.body}</p>
                  </div>
                </section>
              ))}
            </div>

            {/* Back link */}
            <div className="mt-16 text-center">
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </main>

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
              <p className="mb-2">
                <Link to="/ai-policy" className="text-gray-600 text-sm hover:text-yellow-600 transition-colors">AI活用に関する基本方針</Link>
              </p>
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
