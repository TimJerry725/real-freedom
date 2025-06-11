'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 font-['Inter']"
            data-oid="8.py96_"
        >
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
                data-oid="l49dtqn"
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-oid="dyzw1g-">
                    <div className="flex justify-between items-center" data-oid="px9d0p4">
                        <div className="text-2xl font-bold text-blue-600" data-oid="bqvu.dj">
                            The Real Freedom
                        </div>
                        <div className="hidden md:flex space-x-8" data-oid="bwgj_mj">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="7zlfo.q"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('vision')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid=":.azf4l"
                            >
                                Vision
                            </button>
                            <button
                                onClick={() => scrollToSection('who-we-are')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="j2d1lz3"
                            >
                                Who We Are
                            </button>
                            <button
                                onClick={() => scrollToSection('mission')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="wqri.o4"
                            >
                                Mission
                            </button>
                            <button
                                onClick={() => scrollToSection('get-involved')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="s5.82u:"
                            >
                                Get Involved
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <main data-oid="tdfml8o">
                {/* Hero Section */}
                <section
                    id="home"
                    className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white"
                    data-oid="pm31e58"
                >
                    <div className="max-w-7xl mx-auto text-center" data-oid="_5bmtv9">
                        <h1
                            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                            data-oid="w8qzt-m"
                        >
                            The Real Freedom
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-light mb-4" data-oid="w2f:nn7">
                            Welcome to The Real Freedom
                        </h2>
                        <p
                            className="text-xl md:text-2xl font-medium mb-8 text-blue-100"
                            data-oid="75:riwj"
                        >
                            "Freedom Through Christ – Break the Chains, Embrace Life"
                        </p>
                        <div className="max-w-4xl mx-auto" data-oid="e3vry3l">
                            <p
                                className="text-lg md:text-xl leading-relaxed text-blue-50"
                                data-oid="0-gx1cu"
                            >
                                True freedom is found in Christ. Life, as God intended, is meant to
                                be lived in complete freedom—the ability to always choose what is
                                right and walk on purpose. But many have fallen into bondage through
                                deceptive lies, leading to addictions that destroy lives and
                                destinies. At The Real Freedom, we are here to break those lies and
                                help the next generation rise into the life God designed for them.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8" data-oid="gx.ksxw">
                    <div className="max-w-7xl mx-auto" data-oid="._0wppp">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
                            data-oid="k5lxv8w"
                        >
                            🌱 Our Vision – Real Freedom Ministry
                        </h2>

                        <div className="max-w-4xl mx-auto space-y-12" data-oid="xle67v1">
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="ouc6:wz">
                                At Real Freedom Ministry, we believe that real freedom is more than
                                just escape—it is a total transformation of the heart, mind, and
                                purpose. While the world often offers momentary relief through
                                counterfeit pleasures and temporary highs, we are called to proclaim
                                a deeper, lasting truth: true freedom is only found in Jesus Christ.
                            </p>

                            <div
                                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500"
                                data-oid="._hmhtq"
                            >
                                <h3
                                    className="text-2xl font-semibold mb-4 text-blue-600"
                                    data-oid="a7nn2u:"
                                >
                                    More Than Breaking Free
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="kl69kut"
                                >
                                    Freedom isn't just about walking away from addiction—it's about
                                    walking into something greater. We envision lives not only set
                                    free from the chains of substance abuse and pornography, but
                                    restored into their God-given identity. Every person was created
                                    with purpose, dignity, and destiny. Our vision is to help people
                                    discover that truth, embrace it, and live it boldly.
                                </p>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-500"
                                data-oid="_qjgmc8"
                            >
                                <h3
                                    className="text-2xl font-semibold mb-4 text-purple-600"
                                    data-oid="glm29tf"
                                >
                                    A Generation Transformed
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="8mlo64d"
                                >
                                    We see a generation rising up—healed, whole, and set apart for
                                    God. A generation that no longer hides in shame or settles for
                                    shallow substitutes, but lives with conviction, courage, and
                                    clarity. Through intentional outreach, discipleship, and
                                    Spirit-led mentoring, we aim to awaken hearts and raise up young
                                    leaders who will influence their communities with truth and
                                    love.
                                </p>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500"
                                data-oid="ysi:zh4"
                            >
                                <h3
                                    className="text-2xl font-semibold mb-4 text-green-600"
                                    data-oid="bk0y03m"
                                >
                                    A Stand Against the Lies
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="6knlf8:"
                                >
                                    In today's world, freedom is often misunderstood as doing
                                    whatever you want, whenever you want. But this false liberty
                                    leads only to deeper bondage. We stand against this deception by
                                    boldly declaring the truth of the Gospel—that freedom is not the
                                    absence of boundaries, but the presence of Christ. Only in Him
                                    can we find true peace, identity, and fulfillment.
                                </p>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500"
                                data-oid="7witazl"
                            >
                                <h3
                                    className="text-2xl font-semibold mb-4 text-yellow-600"
                                    data-oid="y-vhjik"
                                >
                                    The Heart of Our Vision
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="ul5d6r2"
                                >
                                    Real freedom is a life transformed by the love of God, rooted in
                                    His Word, and empowered by His Spirit. It is living with
                                    purpose, loving others deeply, and standing firm in truth. Our
                                    vision is to see countless lives rescued, redeemed, and released
                                    into the fullness of who God created them to be.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Are Section */}
                <section
                    id="who-we-are"
                    className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
                    data-oid="utekisz"
                >
                    <div className="max-w-7xl mx-auto" data-oid="rs5zn:c">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
                            data-oid="t7rmfk."
                        >
                            Who We Are
                        </h2>

                        <div className="max-w-4xl mx-auto space-y-8 mb-16" data-oid="iu440i_">
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="rlv_uvb">
                                We are a team of believers redeemed by Christ and united by a
                                calling to serve. With backgrounds in church ministry, rural
                                outreach, women and child empowerment, and youth development, we
                                bring diverse experience into one shared purpose—proclaiming freedom
                                to the brokenhearted.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="glstzaj">
                                This ministry operates under the spiritual covering of Ooty Central
                                Open Bible Church of God.
                            </p>
                        </div>

                        <h3
                            className="text-3xl font-semibold text-center mb-12 text-gray-800"
                            data-oid="ew3gujr"
                        >
                            Meet the Team
                        </h3>

                        <div
                            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
                            data-oid="ey8._zs"
                        >
                            {/* Team Member 1 */}
                            <div
                                className="bg-white rounded-lg shadow-lg p-8 text-center"
                                data-oid="bq-u0yz"
                            >
                                <img
                                    src="https://placehold.co/150x150/E0E0E0/333333?text=Team+Member"
                                    alt="Jesu Prakash & Loji Prakash"
                                    className="rounded-full mx-auto mb-6 w-32 h-32 object-cover"
                                    data-oid="r7a61vl"
                                />

                                <h4
                                    className="text-2xl font-semibold mb-4 text-blue-600"
                                    data-oid="kb4v2c6"
                                >
                                    Jesu Prakash & Loji Prakash
                                </h4>
                                <p className="text-gray-700 leading-relaxed" data-oid="9cdp1l2">
                                    After serving faithfully as a pastor for 10 years, Jesu Prakash
                                    now dedicates his time to mentoring pastors and strengthening
                                    churches in remote and underdeveloped areas. Together with his
                                    wife, Loji Prakash, they lead Real Freedom, a ministry born out
                                    of a God-given vision to reach young people caught in the grip
                                    of addiction—particularly drug use and pornography. Through Real
                                    Freedom, they proclaim the transforming power of the Gospel,
                                    offering hope, healing, and restoration to those struggling in
                                    darkness. Their passion is to see lives truly set free and
                                    walking in the fullness of Christ.
                                </p>
                            </div>

                            {/* Team Member 2 */}
                            <div
                                className="bg-white rounded-lg shadow-lg p-8 text-center"
                                data-oid="-3wmy90"
                            >
                                <img
                                    src="https://placehold.co/150x150/E0E0E0/333333?text=Team+Member"
                                    alt="Jinish Mathew & Grace Ruth"
                                    className="rounded-full mx-auto mb-6 w-32 h-32 object-cover"
                                    data-oid="cuo7cjg"
                                />

                                <h4
                                    className="text-2xl font-semibold mb-4 text-purple-600"
                                    data-oid="el.vyhw"
                                >
                                    Jinish Mathew & Grace Ruth
                                </h4>
                                <p className="text-gray-700 leading-relaxed" data-oid="ll4qcov">
                                    With a deep heart for people and a passion to see lives
                                    transformed, Jinish Mathew and Grace Ruth serve together through
                                    Real Freedom Ministry. Jinish has been actively involved in
                                    children's ministry, dedicating his time to nurturing young
                                    hearts with the love and truth of God. Grace, an entrepreneur
                                    and ministry leader since 2011, brings a unique blend of vision
                                    and compassion—committed to both Kingdom work and empowering
                                    others through her leadership. Previously rooted in the work of
                                    WEEP NGO, their ministry began with a focus on empowering women
                                    and children. Now, through Real Freedom, they are led by a
                                    God-given vision to reach youth battling addiction, particularly
                                    those affected by drugs and pornography. Alongside this, they
                                    continue to invest in children's ministry, planting seeds of
                                    hope and faith in the next generation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8" data-oid="n5j8djt">
                    <div className="max-w-7xl mx-auto" data-oid="ai5fdxa">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
                            data-oid="p0:pc7q"
                        >
                            Our Mission – Real Freedom Ministry
                        </h2>

                        <div className="max-w-4xl mx-auto mb-16" data-oid="yueivif">
                            <p
                                className="text-lg leading-relaxed text-gray-700 text-center"
                                data-oid="qub9p3s"
                            >
                                At Real Freedom, we are on a mission to reach youth in India with
                                the life-transforming truth of the Gospel—especially those trapped
                                in the chains of addiction. Our ministry stands on three core
                                pillars that guide everything we do:
                            </p>
                        </div>

                        <div className="space-y-16" data-oid="ufgp.bd">
                            {/* Pillar 1 */}
                            <div
                                className="bg-red-50 rounded-lg shadow-lg p-8 border-l-4 border-red-500"
                                data-oid="dicc00g"
                            >
                                <h3
                                    className="text-3xl font-bold mb-6 text-red-600"
                                    data-oid="oc1jbn2"
                                >
                                    1. Expose the Lies
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700 mb-6"
                                    data-oid="z5re5b2"
                                >
                                    Addiction thrives in darkness and deception. Many young people
                                    fall into the grip of drugs and pornography believing lies—that
                                    they will feel better, be accepted, escape pain, or gain
                                    control. Our mission is to bring those lies into the light.
                                </p>
                                <ul
                                    className="list-disc list-inside space-y-2 text-gray-700 mb-6"
                                    data-oid="i7rfyay"
                                >
                                    <li data-oid="fo_pyba">
                                        Community events, school and college outreach, and awareness
                                        workshops.
                                    </li>
                                    <li data-oid="5qsn-6-">
                                        Educational media (videos, articles, and social campaigns)
                                        that expose the psychological, emotional, and spiritual
                                        impact of addiction.
                                    </li>
                                    <li data-oid="063:re7">
                                        Open conversations that challenge cultural silence and
                                        stigma, giving youth a voice and space to ask hard
                                        questions.
                                    </li>
                                </ul>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="v74flhh"
                                >
                                    By exposing these lies, we help young people and their families
                                    recognize the destructive nature of addiction and the need for a
                                    better path.
                                </p>
                            </div>

                            {/* Pillar 2 */}
                            <div
                                className="bg-blue-50 rounded-lg shadow-lg p-8 border-l-4 border-blue-500"
                                data-oid="ihk2pqm"
                            >
                                <h3
                                    className="text-3xl font-bold mb-6 text-blue-600"
                                    data-oid="sth:u5u"
                                >
                                    2. Offer Real Hope
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700 mb-6"
                                    data-oid="q4kz._r"
                                >
                                    The world offers temporary fixes—but Jesus Christ offers lasting
                                    freedom. At Real Freedom, we believe the Gospel is the ultimate
                                    answer to the brokenness caused by addiction. Our goal is not
                                    just recovery, but redemption.
                                </p>
                                <ul
                                    className="list-disc list-inside space-y-2 text-gray-700 mb-6"
                                    data-oid="jm426v_"
                                >
                                    <li data-oid="kj80i89">
                                        Proclaiming the Gospel in every campaign, interaction, and
                                        resource we create.
                                    </li>
                                    <li data-oid="eaeafbi">
                                        Offering personal mentorship—walking alongside individuals
                                        in their journey.
                                    </li>
                                    <li data-oid="3._a6:y">
                                        Distributing Christ-centered materials—including
                                        devotionals, testimonies, and media content that point to
                                        healing in Jesus.
                                    </li>
                                </ul>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="d.0blij"
                                >
                                    This is not about religion—it's about a real relationship with
                                    Christ that transforms hearts and restores lives.
                                </p>
                            </div>

                            {/* Pillar 3 */}
                            <div
                                className="bg-green-50 rounded-lg shadow-lg p-8 border-l-4 border-green-500"
                                data-oid="tfv.0re"
                            >
                                <h3
                                    className="text-3xl font-bold mb-6 text-green-600"
                                    data-oid="r_kkfe5"
                                >
                                    3. Walk in Freedom
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700 mb-6"
                                    data-oid="uogtt6j"
                                >
                                    Freedom is not a one-time moment; it's a daily walk. We are
                                    committed to standing with those who want to be free—offering
                                    encouragement, accountability, and discipleship every step of
                                    the way.
                                </p>
                                <ul
                                    className="list-disc list-inside space-y-2 text-gray-700 mb-6"
                                    data-oid="6x9-ny6"
                                >
                                    <li data-oid="wg8:ikm">
                                        Providing practical recovery tools, such as counseling,
                                        accountability resources, and personalized support.
                                    </li>
                                    <li data-oid="rdk8k1i">
                                        Creating prayer networks and spiritual mentorship,
                                        connecting youth to leaders and communities that build their
                                        faith.
                                    </li>
                                    <li data-oid="uwr-mmb">
                                        Leading discipleship programs that help them grow in
                                        identity, purpose, and spiritual maturity.
                                    </li>
                                </ul>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="5u_hz85"
                                >
                                    We don't just want people to be free—we want them to live free
                                    and become a light to others.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto mt-16 text-center" data-oid="u7y-brf">
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="v6addz.">
                                At Real Freedom, we believe the love of Christ breaks every chain.
                                Our mission is to boldly proclaim that truth, walk with those in
                                need, and raise a generation that knows what it means to live in the
                                freedom only Jesus can give.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Get Involved Section */}
                <section
                    id="get-involved"
                    className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50"
                    data-oid="1qmfdx0"
                >
                    <div className="max-w-7xl mx-auto" data-oid="eh-5:_w">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
                            data-oid="asm8kz9"
                        >
                            🙌 Get Involved – Be Part of Real Freedom
                        </h2>

                        <div className="max-w-4xl mx-auto mb-16 text-center" data-oid="v8er5w8">
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="1c0091l">
                                Do you want to make a difference in the lives of young people across
                                India? Whether you're someone who has a heart to serve, a passion to
                                pray, a desire to give, or you're in need of help yourself—we
                                welcome you with open arms to be part of The Real Freedom movement.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16" data-oid="wbey2js">
                            {/* Seeking Help */}
                            <div className="bg-white rounded-lg shadow-lg p-8" data-oid="669k:o:">
                                <h3
                                    className="text-2xl font-semibold mb-4 text-blue-600"
                                    data-oid="3rrtkwn"
                                >
                                    👐 Seeking Help? You're Not Alone.
                                </h3>
                                <p
                                    className="text-gray-700 leading-relaxed mb-6"
                                    data-oid="cc_-h82"
                                >
                                    If you or someone you know is struggling with addiction to
                                    drugs, pornography, or other harmful behaviors, we want you to
                                    know: there is hope. We offer a safe, compassionate space for
                                    healing. Whether through counseling, prayer, or mentorship, our
                                    team is here to walk with you—without shame or judgment. Reach
                                    out today and take the first step toward real freedom.
                                </p>
                                <button
                                    onClick={() => alert('Contact Us clicked!')}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
                                    data-oid="i3n05r:"
                                >
                                    👉 Contact Us
                                </button>
                            </div>

                            {/* Volunteer */}
                            <div className="bg-white rounded-lg shadow-lg p-8" data-oid="bs8m2hf">
                                <h3
                                    className="text-2xl font-semibold mb-4 text-green-600"
                                    data-oid="pk513:u"
                                >
                                    🤝 Volunteer With Us
                                </h3>
                                <p
                                    className="text-gray-700 leading-relaxed mb-4"
                                    data-oid="cj1xr4g"
                                >
                                    You can make an impact right where you are. Join our team of
                                    volunteers who are passionate about bringing truth and hope to
                                    the next generation. Whether you're gifted in media, counseling,
                                    event organizing, administration, prayer, or simply love
                                    people—there's a place for you in Real Freedom.
                                </p>
                                <ul
                                    className="list-disc list-inside space-y-1 text-gray-700 mb-6"
                                    data-oid="lp7p68y"
                                >
                                    <li data-oid="l4aplms">School/college outreach</li>
                                    <li data-oid="pyfklqn">Media and content creation</li>
                                    <li data-oid="fs0fbij">Mentorship and follow-up</li>
                                    <li data-oid="uv2j7zq">Children's ministry support</li>
                                    <li data-oid="uk3qt9j">Event coordination and more</li>
                                </ul>
                                <button
                                    onClick={() => alert('Volunteer clicked!')}
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
                                    data-oid="-ebhb82"
                                >
                                    👉 Volunteer
                                </button>
                            </div>

                            {/* Prayer Partner */}
                            <div className="bg-white rounded-lg shadow-lg p-8" data-oid="v6-z8zz">
                                <h3
                                    className="text-2xl font-semibold mb-4 text-purple-600"
                                    data-oid="pdj9ltj"
                                >
                                    🙏 Become a Prayer Partner
                                </h3>
                                <p className="text-gray-700 leading-relaxed" data-oid="gg0222-">
                                    We believe every breakthrough begins in prayer. Partner with us
                                    by committing to pray regularly for our team, the youth we
                                    reach, and the families we serve. We'll keep you updated with
                                    prayer points and testimonies so you can stand with us in faith.
                                </p>
                            </div>

                            {/* Donate */}
                            <div className="bg-white rounded-lg shadow-lg p-8" data-oid="cy7gijm">
                                <h3
                                    className="text-2xl font-semibold mb-4 text-yellow-600"
                                    data-oid="dp8ao:2"
                                >
                                    💝 Support the Mission – Donate
                                </h3>
                                <p
                                    className="text-gray-700 leading-relaxed mb-6"
                                    data-oid="1k-67r-"
                                >
                                    Your generosity fuels freedom. By partnering with us
                                    financially, you help us reach more youth, develop life-changing
                                    resources, provide counseling and mentorship, and host outreach
                                    events across India. Every gift, large or small, goes directly
                                    into the work of transformation.
                                </p>
                                <button
                                    onClick={() => alert('Donate clicked!')}
                                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
                                    data-oid="ogym1ii"
                                >
                                    👉 Donate
                                </button>
                            </div>
                        </div>

                        <div className="text-center" data-oid="s1hyl3-">
                            <h3
                                className="text-3xl font-semibold mb-6 text-gray-800"
                                data-oid="dd:in1u"
                            >
                                💬 Together, Let's Build a Generation Full of Purpose
                            </h3>
                            <p
                                className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto"
                                data-oid="gs1fuhv"
                            >
                                We believe in a future where addiction no longer defines lives,
                                where children grow up knowing their identity in Christ, and where
                                hope is louder than shame. Your involvement can help make that
                                vision a reality. Let's walk together—toward healing, truth, and
                                real freedom in Christ.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer
                className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8"
                data-oid="n_f04_6"
            >
                <div className="max-w-7xl mx-auto text-center" data-oid="74od5eb">
                    <div className="text-2xl font-bold mb-4" data-oid="c712k32">
                        The Real Freedom
                    </div>
                    <p className="text-gray-300 mb-4" data-oid="-vl8n6i">
                        Freedom Through Christ – Break the Chains, Embrace Life
                    </p>
                    <p className="text-gray-400 text-sm" data-oid="vncbjwx">
                        © 2024 The Real Freedom Ministry. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
