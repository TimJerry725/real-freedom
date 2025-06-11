'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState('');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest('[data-dropdown]')) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const subjectOptions = [
        {
            value: 'seeking-help',
            label: 'Seeking Help',
            icon: 'fas fa-hand-holding-heart',
            color: 'text-blue-600',
            description: 'Need support or counseling',
        },
        {
            value: 'volunteer',
            label: 'Volunteer Opportunities',
            icon: 'fas fa-handshake',
            color: 'text-green-600',
            description: 'Want to join our team',
        },
        {
            value: 'prayer-partner',
            label: 'Become a Prayer Partner',
            icon: 'fas fa-praying-hands',
            color: 'text-purple-600',
            description: 'Commit to pray with us',
        },
        {
            value: 'donation',
            label: 'Donation Inquiry',
            icon: 'fas fa-heart',
            color: 'text-red-600',
            description: 'Support our mission financially',
        },
        {
            value: 'general',
            label: 'General Inquiry',
            icon: 'fas fa-comments',
            color: 'text-indigo-600',
            description: 'Questions about our ministry',
        },
        {
            value: 'other',
            label: 'Other',
            icon: 'fas fa-ellipsis-h',
            color: 'text-gray-600',
            description: 'Something else',
        },
    ];

    const handleSubjectSelect = (option: (typeof subjectOptions)[0]) => {
        setSelectedSubject(option.value);
        setIsDropdownOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 font-inter"
            data-oid="e2y.a5w"
        >
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
                data-oid="p.pe1e6"
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-oid="2bxdj03">
                    <div className="flex justify-between items-center" data-oid="o.1vtfg">
                        <div
                            className="text-2xl font-bold text-blue-600 font-merriweather"
                            data-oid="7bx62pe"
                        >
                            The Real Freedom
                        </div>
                        <div className="hidden md:flex space-x-8" data-oid="1ez9n2v">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="fvueenh"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('vision')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="ok63ff0"
                            >
                                Vision
                            </button>
                            <button
                                onClick={() => scrollToSection('who-we-are')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="o_h_mlk"
                            >
                                Who We Are
                            </button>
                            <button
                                onClick={() => scrollToSection('mission')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="hfw8oby"
                            >
                                Mission
                            </button>
                            <button
                                onClick={() => scrollToSection('get-involved')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="y-gyxlu"
                            >
                                Get Involved
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                data-oid="d862ht0"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <main data-oid="h9r_ht6">
                {/* Hero Section */}
                <section
                    id="home"
                    className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden"
                    data-oid="chyo:ft"
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="vimt9mk">
                        <div
                            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"
                            data-oid=".evfzt:"
                        ></div>
                        <div
                            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"
                            data-oid="e18j:2o"
                        ></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto text-center" data-oid="rimm9-o">
                        <div className="mb-8" data-oid=":xynmcv">
                            <div
                                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm mb-6"
                                data-oid="fu3brun"
                            >
                                <i
                                    className="fas fa-star text-blue-600 mr-2"
                                    data-oid="q2c_2wo"
                                ></i>
                                <span
                                    className="text-blue-600 font-medium text-sm"
                                    data-oid="gh3vhi2"
                                >
                                    Transforming Lives Through Christ
                                </span>
                            </div>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-merriweather"
                            data-oid="nd1yfbf"
                        >
                            The Real Freedom
                        </h1>

                        <h2
                            className="text-2xl md:text-3xl font-light mb-6 text-gray-700"
                            data-oid="54q4n23"
                        >
                            Welcome to a Life of Purpose
                        </h2>

                        <p
                            className="text-xl md:text-2xl font-medium mb-8 text-blue-700 max-w-4xl mx-auto"
                            data-oid="n8pyp_k"
                        >
                            "Freedom Through Christ – Break the Chains, Embrace Life"
                        </p>

                        <div className="max-w-4xl mx-auto mb-12" data-oid="gprg2x5">
                            <p
                                className="text-lg md:text-xl leading-relaxed text-gray-600"
                                data-oid="4hfxqgy"
                            >
                                True freedom is found in Christ. Life, as God intended, is meant to
                                be lived in complete freedom—the ability to always choose what is
                                right and walk on purpose. But many have fallen into bondage through
                                deceptive lies, leading to addictions that destroy lives and
                                destinies. At The Real Freedom, we are here to break those lies and
                                help the next generation rise into the life God designed for them.
                            </p>
                        </div>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            data-oid="leeuz5h"
                        >
                            <button
                                onClick={() => scrollToSection('mission')}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                data-oid="jb4t3v:"
                            >
                                Discover Our Mission
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-full border-2 border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                data-oid=".yl-wi2"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8" data-oid="iyj16kh">
                    <div className="max-w-7xl mx-auto" data-oid="6my4m88">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 font-merriweather"
                            data-oid="01h437h"
                        >
                            <i
                                className="fas fa-seedling text-green-600 mr-4"
                                data-oid="cdk117z"
                            ></i>
                            Our Vision – Real Freedom Ministry
                        </h2>

                        <div className="max-w-4xl mx-auto space-y-12" data-oid="4il1gjm">
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="ohj-60:">
                                At Real Freedom Ministry, we believe that real freedom is more than
                                just escape—it is a total transformation of the heart, mind, and
                                purpose. While the world often offers momentary relief through
                                counterfeit pleasures and temporary highs, we are called to proclaim
                                a deeper, lasting truth: true freedom is only found in Jesus Christ.
                            </p>

                            <div
                                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500"
                                data-oid="xl7crga"
                            >
                                <h3
                                    className="text-2xl font-semibold mb-4 text-blue-600"
                                    data-oid="9hv6jak"
                                >
                                    More Than Breaking Free
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="3efy_g:"
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
                                data-oid=".su.j71"
                            >
                                <h3
                                    className="text-2xl font-semibold mb-4 text-purple-600"
                                    data-oid="8nsm.wn"
                                >
                                    A Generation Transformed
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid=".xhkuv6"
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
                                data-oid="9_gf73p"
                            >
                                <h3
                                    className="text-2xl font-semibold mb-4 text-green-600"
                                    data-oid="adl7d8s"
                                >
                                    A Stand Against the Lies
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="zrcr4ot"
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
                                data-oid="-d509zj"
                            >
                                <h3
                                    className="text-2xl font-semibold mb-4 text-yellow-600"
                                    data-oid="yhfvs5j"
                                >
                                    The Heart of Our Vision
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="x235l2i"
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
                    data-oid="9:n8o:g"
                >
                    <div className="max-w-7xl mx-auto" data-oid="9168.wc">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 font-merriweather"
                            data-oid="j9wps4y"
                        >
                            <i className="fas fa-users text-blue-600 mr-4" data-oid="dh1yh8x"></i>
                            Who We Are
                        </h2>

                        <div className="max-w-4xl mx-auto space-y-8 mb-16" data-oid="xsawung">
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="w.plcxh">
                                We are a team of believers redeemed by Christ and united by a
                                calling to serve. With backgrounds in church ministry, rural
                                outreach, women and child empowerment, and youth development, we
                                bring diverse experience into one shared purpose—proclaiming freedom
                                to the brokenhearted.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="3frkdtl">
                                This ministry operates under the spiritual covering of Ooty Central
                                Open Bible Church of God.
                            </p>
                        </div>

                        <h3
                            className="text-3xl font-semibold text-center mb-12 text-gray-800"
                            data-oid="pn5qc14"
                        >
                            Meet the Team
                        </h3>

                        <div
                            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
                            data-oid="iv6d1:2"
                        >
                            {/* Team Member 1 */}
                            <div
                                className="bg-white rounded-lg shadow-lg p-8 text-center"
                                data-oid="ol15tud"
                            >
                                <img
                                    src="https://placehold.co/150x150/E0E0E0/333333?text=Team+Member"
                                    alt="Jesu Prakash & Loji Prakash"
                                    className="rounded-full mx-auto mb-6 w-32 h-32 object-cover"
                                    data-oid="h_8pjxj"
                                />

                                <h4
                                    className="text-2xl font-semibold mb-4 text-blue-600"
                                    data-oid="j-yo8ib"
                                >
                                    Jesu Prakash & Loji Prakash
                                </h4>
                                <p className="text-gray-700 leading-relaxed" data-oid="qfupy9e">
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
                                data-oid="r6q1u3m"
                            >
                                <img
                                    src="https://placehold.co/150x150/E0E0E0/333333?text=Team+Member"
                                    alt="Jinish Mathew & Grace Ruth"
                                    className="rounded-full mx-auto mb-6 w-32 h-32 object-cover"
                                    data-oid="ymbyqig"
                                />

                                <h4
                                    className="text-2xl font-semibold mb-4 text-purple-600"
                                    data-oid="x:6-3sy"
                                >
                                    Jinish Mathew & Grace Ruth
                                </h4>
                                <p className="text-gray-700 leading-relaxed" data-oid="y394je3">
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
                <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8" data-oid="46xs85q">
                    <div className="max-w-7xl mx-auto" data-oid="tmcvqtp">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 font-merriweather"
                            data-oid="_uih-ac"
                        >
                            <i className="fas fa-bullseye text-red-600 mr-4" data-oid="yhw9-86"></i>
                            Our Mission – Real Freedom Ministry
                        </h2>

                        <div className="max-w-4xl mx-auto mb-16" data-oid="jnwpap8">
                            <p
                                className="text-lg leading-relaxed text-gray-700 text-center"
                                data-oid="oa:ko1."
                            >
                                At Real Freedom, we are on a mission to reach youth in India with
                                the life-transforming truth of the Gospel—especially those trapped
                                in the chains of addiction. Our ministry stands on three core
                                pillars that guide everything we do:
                            </p>
                        </div>

                        <div className="space-y-16" data-oid="rx:wa2g">
                            {/* Pillar 1 */}
                            <div
                                className="bg-red-50 rounded-lg shadow-lg p-8 border-l-4 border-red-500"
                                data-oid="62:a:24"
                            >
                                <h3
                                    className="text-3xl font-bold mb-6 text-red-600 flex items-center"
                                    data-oid="8r18mg-"
                                >
                                    <i
                                        className="fas fa-eye text-red-600 mr-4"
                                        data-oid="uvgy3z9"
                                    ></i>
                                    Expose the Lies
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700 mb-6"
                                    data-oid="3xdif-f"
                                >
                                    Addiction thrives in darkness and deception. Many young people
                                    fall into the grip of drugs and pornography believing lies—that
                                    they will feel better, be accepted, escape pain, or gain
                                    control. Our mission is to bring those lies into the light.
                                </p>
                                <ul
                                    className="list-disc list-inside space-y-2 text-gray-700 mb-6"
                                    data-oid="nhi9.m1"
                                >
                                    <li data-oid="0e8t8_y">
                                        Community events, school and college outreach, and awareness
                                        workshops.
                                    </li>
                                    <li data-oid="-8wlhvq">
                                        Educational media (videos, articles, and social campaigns)
                                        that expose the psychological, emotional, and spiritual
                                        impact of addiction.
                                    </li>
                                    <li data-oid="jqmefqw">
                                        Open conversations that challenge cultural silence and
                                        stigma, giving youth a voice and space to ask hard
                                        questions.
                                    </li>
                                </ul>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="f8xtc:v"
                                >
                                    By exposing these lies, we help young people and their families
                                    recognize the destructive nature of addiction and the need for a
                                    better path.
                                </p>
                            </div>

                            {/* Pillar 2 */}
                            <div
                                className="bg-blue-50 rounded-lg shadow-lg p-8 border-l-4 border-blue-500"
                                data-oid="mn26z48"
                            >
                                <h3
                                    className="text-3xl font-bold mb-6 text-blue-600 flex items-center"
                                    data-oid=".980kb9"
                                >
                                    <i
                                        className="fas fa-hands-helping text-blue-600 mr-4"
                                        data-oid="l8mwth1"
                                    ></i>
                                    Offer Real Hope
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700 mb-6"
                                    data-oid="16bvfur"
                                >
                                    The world offers temporary fixes—but Jesus Christ offers lasting
                                    freedom. At Real Freedom, we believe the Gospel is the ultimate
                                    answer to the brokenness caused by addiction. Our goal is not
                                    just recovery, but redemption.
                                </p>
                                <ul
                                    className="list-disc list-inside space-y-2 text-gray-700 mb-6"
                                    data-oid="h:xqhfe"
                                >
                                    <li data-oid="qas5a2q">
                                        Proclaiming the Gospel in every campaign, interaction, and
                                        resource we create.
                                    </li>
                                    <li data-oid="z5584du">
                                        Offering personal mentorship—walking alongside individuals
                                        in their journey.
                                    </li>
                                    <li data-oid="-:u54ky">
                                        Distributing Christ-centered materials—including
                                        devotionals, testimonies, and media content that point to
                                        healing in Jesus.
                                    </li>
                                </ul>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="0vcefsh"
                                >
                                    This is not about religion—it's about a real relationship with
                                    Christ that transforms hearts and restores lives.
                                </p>
                            </div>

                            {/* Pillar 3 */}
                            <div
                                className="bg-green-50 rounded-lg shadow-lg p-8 border-l-4 border-green-500"
                                data-oid="bf7x548"
                            >
                                <h3
                                    className="text-3xl font-bold mb-6 text-green-600 flex items-center"
                                    data-oid="-g3u-zr"
                                >
                                    <i
                                        className="fas fa-walking text-green-600 mr-4"
                                        data-oid="rk-8er6"
                                    ></i>
                                    Walk in Freedom
                                </h3>
                                <p
                                    className="text-lg leading-relaxed text-gray-700 mb-6"
                                    data-oid="1gnrbgb"
                                >
                                    Freedom is not a one-time moment; it's a daily walk. We are
                                    committed to standing with those who want to be free—offering
                                    encouragement, accountability, and discipleship every step of
                                    the way.
                                </p>
                                <ul
                                    className="list-disc list-inside space-y-2 text-gray-700 mb-6"
                                    data-oid="1i4j90."
                                >
                                    <li data-oid="c9n3b6l">
                                        Providing practical recovery tools, such as counseling,
                                        accountability resources, and personalized support.
                                    </li>
                                    <li data-oid="3org.w9">
                                        Creating prayer networks and spiritual mentorship,
                                        connecting youth to leaders and communities that build their
                                        faith.
                                    </li>
                                    <li data-oid="aylee9b">
                                        Leading discipleship programs that help them grow in
                                        identity, purpose, and spiritual maturity.
                                    </li>
                                </ul>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    data-oid="7dknffr"
                                >
                                    We don't just want people to be free—we want them to live free
                                    and become a light to others.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto mt-16 text-center" data-oid="9mf8:-7">
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="lk91xqr">
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
                    data-oid="kjm802i"
                >
                    <div className="max-w-7xl mx-auto" data-oid="9z6e3dj">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 font-merriweather"
                            data-oid=".ltv7gs"
                        >
                            <i
                                className="fas fa-hands-helping text-purple-600 mr-4"
                                data-oid="k:x28tv"
                            ></i>
                            Get Involved – Be Part of Real Freedom
                        </h2>

                        <div className="max-w-4xl mx-auto mb-16 text-center" data-oid="t0iym9:">
                            <p className="text-lg leading-relaxed text-gray-700" data-oid="svjtz8f">
                                Do you want to make a difference in the lives of young people across
                                India? Whether you're someone who has a heart to serve, a passion to
                                pray, a desire to give, or you're in need of help yourself—we
                                welcome you with open arms to be part of The Real Freedom movement.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16" data-oid="apjj.la">
                            {/* Seeking Help */}
                            <div className="bg-white rounded-lg shadow-lg p-8" data-oid="vkyn8zp">
                                <h3
                                    className="text-2xl font-semibold mb-4 text-blue-600 font-merriweather"
                                    data-oid="jiye_pv"
                                >
                                    <i
                                        className="fas fa-hand-holding-heart text-blue-600 mr-3"
                                        data-oid="pmt3ied"
                                    ></i>
                                    Seeking Help? You're Not Alone.
                                </h3>
                                <p
                                    className="text-gray-700 leading-relaxed mb-6"
                                    data-oid="edj8x86"
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
                                    data-oid="h0zs769"
                                >
                                    👉 Contact Us
                                </button>
                            </div>

                            {/* Volunteer */}
                            <div className="bg-white rounded-lg shadow-lg p-8" data-oid="pqeo93r">
                                <h3
                                    className="text-2xl font-semibold mb-4 text-green-600 font-merriweather"
                                    data-oid="tumt9li"
                                >
                                    <i
                                        className="fas fa-handshake text-green-600 mr-3"
                                        data-oid="p7_e1fl"
                                    ></i>
                                    Volunteer With Us
                                </h3>
                                <p
                                    className="text-gray-700 leading-relaxed mb-4"
                                    data-oid="2rr2:bs"
                                >
                                    You can make an impact right where you are. Join our team of
                                    volunteers who are passionate about bringing truth and hope to
                                    the next generation. Whether you're gifted in media, counseling,
                                    event organizing, administration, prayer, or simply love
                                    people—there's a place for you in Real Freedom.
                                </p>
                                <ul
                                    className="list-disc list-inside space-y-1 text-gray-700 mb-6"
                                    data-oid="6xj71hh"
                                >
                                    <li data-oid="pjsvwn2">School/college outreach</li>
                                    <li data-oid="7b1.b-g">Media and content creation</li>
                                    <li data-oid="-pxjb9l">Mentorship and follow-up</li>
                                    <li data-oid="hnn:lxz">Children's ministry support</li>
                                    <li data-oid="4l5e-a3">Event coordination and more</li>
                                </ul>
                                <button
                                    onClick={() => alert('Volunteer clicked!')}
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
                                    data-oid="6d-gl6g"
                                >
                                    👉 Volunteer
                                </button>
                            </div>

                            {/* Prayer Partner */}
                            <div className="bg-white rounded-lg shadow-lg p-8" data-oid="k5fq6th">
                                <h3
                                    className="text-2xl font-semibold mb-4 text-purple-600 font-merriweather"
                                    data-oid="0pgoi7x"
                                >
                                    <i
                                        className="fas fa-praying-hands text-purple-600 mr-3"
                                        data-oid="e6l0k2p"
                                    ></i>
                                    Become a Prayer Partner
                                </h3>
                                <p className="text-gray-700 leading-relaxed" data-oid="zzb1spw">
                                    We believe every breakthrough begins in prayer. Partner with us
                                    by committing to pray regularly for our team, the youth we
                                    reach, and the families we serve. We'll keep you updated with
                                    prayer points and testimonies so you can stand with us in faith.
                                </p>
                            </div>

                            {/* Donate */}
                            <div className="bg-white rounded-lg shadow-lg p-8" data-oid="ejt7hje">
                                <h3
                                    className="text-2xl font-semibold mb-4 text-yellow-600 font-merriweather"
                                    data-oid="32ppruk"
                                >
                                    <i
                                        className="fas fa-heart text-yellow-600 mr-3"
                                        data-oid="z3ym774"
                                    ></i>
                                    Support the Mission – Donate
                                </h3>
                                <p
                                    className="text-gray-700 leading-relaxed mb-6"
                                    data-oid="0p2u.3w"
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
                                    data-oid="q8yjnpj"
                                >
                                    👉 Donate
                                </button>
                            </div>
                        </div>

                        <div className="text-center" data-oid="zhrpfad">
                            <h3
                                className="text-3xl font-semibold mb-6 text-gray-800 font-merriweather"
                                data-oid="ex8d4:9"
                            >
                                <i
                                    className="fas fa-comments text-blue-600 mr-3"
                                    data-oid="m7fzi.."
                                ></i>
                                Together, Let's Build a Generation Full of Purpose
                            </h3>
                            <p
                                className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto"
                                data-oid="2h3hq8d"
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

                {/* Contact Us Section */}
                <section
                    id="contact"
                    className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
                    data-oid="aem6jms"
                >
                    <div className="max-w-7xl mx-auto" data-oid="935k6g4">
                        <div className="text-center mb-16" data-oid="ymbyeql">
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-merriweather"
                                data-oid="57qa95y"
                            >
                                <i
                                    className="fas fa-phone text-blue-600 mr-4"
                                    data-oid="mzwtear"
                                ></i>
                                Contact Us
                            </h2>
                            <p
                                className="text-lg text-gray-600 max-w-3xl mx-auto"
                                data-oid="fl-rszj"
                            >
                                Ready to take the first step toward real freedom? We're here to
                                listen, support, and walk alongside you. Reach out to us today.
                            </p>
                        </div>

                        <div
                            className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
                            data-oid="ni2a.8j"
                        >
                            {/* Contact Information */}
                            <div className="space-y-8" data-oid="k0e0azk">
                                <div data-oid="dajb9pf">
                                    <h3
                                        className="text-2xl font-semibold mb-6 text-gray-800"
                                        data-oid="1mdglla"
                                    >
                                        Get in Touch
                                    </h3>
                                    <div className="space-y-6" data-oid="iq:af9f">
                                        <div
                                            className="flex items-start space-x-4"
                                            data-oid="n805pc6"
                                        >
                                            <div
                                                className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                                                data-oid="twjlb94"
                                            >
                                                <i
                                                    className="fas fa-envelope text-blue-600 text-xl"
                                                    data-oid="zxtj7qn"
                                                ></i>
                                            </div>
                                            <div data-oid="kykya-j">
                                                <h4
                                                    className="font-semibold text-gray-800 mb-1"
                                                    data-oid="a_mr2jg"
                                                >
                                                    Email Us
                                                </h4>
                                                <p className="text-gray-600" data-oid="54l.ln7">
                                                    info@realfreedom.org
                                                </p>
                                                <p className="text-gray-600" data-oid="_e_3s84">
                                                    support@realfreedom.org
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="flex items-start space-x-4"
                                            data-oid="d1.0-ku"
                                        >
                                            <div
                                                className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"
                                                data-oid="0-yfw34"
                                            >
                                                <i
                                                    className="fas fa-phone text-green-600 text-xl"
                                                    data-oid="pkxpk-u"
                                                ></i>
                                            </div>
                                            <div data-oid="ms2ila8">
                                                <h4
                                                    className="font-semibold text-gray-800 mb-1"
                                                    data-oid="l.4ffv6"
                                                >
                                                    Call Us
                                                </h4>
                                                <p className="text-gray-600" data-oid="xnhf3iw">
                                                    +91 98765 43210
                                                </p>
                                                <p className="text-gray-600" data-oid="n1e5kil">
                                                    +91 87654 32109
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="flex items-start space-x-4"
                                            data-oid="ci:essb"
                                        >
                                            <div
                                                className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"
                                                data-oid="ahic3ie"
                                            >
                                                <i
                                                    className="fas fa-map-marker-alt text-purple-600 text-xl"
                                                    data-oid="v4w:uh4"
                                                ></i>
                                            </div>
                                            <div data-oid="i09zn3w">
                                                <h4
                                                    className="font-semibold text-gray-800 mb-1"
                                                    data-oid="lv-plvq"
                                                >
                                                    Visit Us
                                                </h4>
                                                <p className="text-gray-600" data-oid="l_x_u3j">
                                                    Ooty Central Open Bible Church of God
                                                    <br data-oid="t4d.kuy" />
                                                    Ooty, Tamil Nadu, India
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-6" data-oid="w4i_o40">
                                    <h4
                                        className="font-semibold text-blue-800 mb-3"
                                        data-oid="fay_4m5"
                                    >
                                        <i
                                            className="fas fa-life-ring text-blue-800 mr-2"
                                            data-oid="lfx8mzt"
                                        ></i>
                                        Need Immediate Support?
                                    </h4>
                                    <p
                                        className="text-blue-700 text-sm leading-relaxed"
                                        data-oid="_bjs226"
                                    >
                                        If you're struggling with addiction or need someone to talk
                                        to right now, don't hesitate to reach out. We provide
                                        confidential support and are here to help you take the first
                                        step toward freedom.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-gray-50 rounded-xl p-8" data-oid="g89v0d-">
                                <h3
                                    className="text-2xl font-semibold mb-6 text-gray-800"
                                    data-oid=":tie5f0"
                                >
                                    Send Us a Message
                                </h3>
                                <form className="space-y-6" data-oid="1zwia3k">
                                    <div className="grid md:grid-cols-2 gap-4" data-oid="x5siy18">
                                        <div data-oid="igqgiy6">
                                            <label
                                                htmlFor="firstName"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                                data-oid="b.bkivn"
                                            >
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                                placeholder="Your first name"
                                                data-oid="1628zs9"
                                            />
                                        </div>
                                        <div data-oid="i0834ad">
                                            <label
                                                htmlFor="lastName"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                                data-oid="at37ehv"
                                            >
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                                placeholder="Your last name"
                                                data-oid="k22.7g_"
                                            />
                                        </div>
                                    </div>

                                    <div data-oid="xbsg41y">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="3lub45a"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            placeholder="your.email@example.com"
                                            data-oid="12cmirv"
                                        />
                                    </div>

                                    <div data-oid="e5bhca:">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="ci1fr4p"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            placeholder="+91 98765 43210"
                                            data-oid="uviy855"
                                        />
                                    </div>

                                    <div className="relative" data-dropdown data-oid="4qhxhc_">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="q6pl6h."
                                        >
                                            Subject *
                                        </label>
                                        <div className="relative" data-oid="f_4g9nc">
                                            <button
                                                type="button"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white text-left flex items-center justify-between"
                                                data-oid="hlcxirw"
                                            >
                                                <span
                                                    className={
                                                        selectedSubject
                                                            ? 'text-gray-900 flex items-center'
                                                            : 'text-gray-500'
                                                    }
                                                    data-oid="g6wzjxd"
                                                >
                                                    {selectedSubject ? (
                                                        <>
                                                            <i
                                                                className={`${subjectOptions.find((opt) => opt.value === selectedSubject)?.icon} ${subjectOptions.find((opt) => opt.value === selectedSubject)?.color} mr-2`}
                                                                data-oid="ivng1bo"
                                                            ></i>
                                                            {
                                                                subjectOptions.find(
                                                                    (opt) =>
                                                                        opt.value ===
                                                                        selectedSubject,
                                                                )?.label
                                                            }
                                                        </>
                                                    ) : (
                                                        'Select a subject'
                                                    )}
                                                </span>
                                                <svg
                                                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                                                        isDropdownOpen ? 'rotate-180' : ''
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="4mfirrd"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                        data-oid="uygowjv"
                                                    />
                                                </svg>
                                            </button>

                                            {isDropdownOpen && (
                                                <div
                                                    className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
                                                    data-oid="zop0kfd"
                                                >
                                                    {subjectOptions.map((option) => (
                                                        <button
                                                            key={option.value}
                                                            type="button"
                                                            onClick={() =>
                                                                handleSubjectSelect(option)
                                                            }
                                                            className="w-full px-4 py-3 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0"
                                                            data-oid="m-hf:8r"
                                                        >
                                                            <div
                                                                className="flex flex-col"
                                                                data-oid="6uypjrv"
                                                            >
                                                                <span
                                                                    className="font-medium text-gray-900 flex items-center"
                                                                    data-oid="5q2-.gt"
                                                                >
                                                                    <i
                                                                        className={`${option.icon} ${option.color} mr-3`}
                                                                        data-oid="-pimtuw"
                                                                    ></i>
                                                                    {option.label}
                                                                </span>
                                                                <span
                                                                    className="text-sm text-gray-500 mt-1 ml-6"
                                                                    data-oid="w_.ji_t"
                                                                >
                                                                    {option.description}
                                                                </span>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <input
                                            type="hidden"
                                            name="subject"
                                            value={selectedSubject}
                                            required
                                            data-oid="yfqpy93"
                                        />
                                    </div>

                                    <div data-oid="-t_j56r">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="8xbkjvz"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                                            placeholder="Please share your message, questions, or how we can help you..."
                                            data-oid="rw6e9l9"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start space-x-3" data-oid="3us1-:g">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            name="privacy"
                                            required
                                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            data-oid="2sicsb."
                                        />

                                        <label
                                            htmlFor="privacy"
                                            className="text-sm text-gray-600"
                                            data-oid="4bchfug"
                                        >
                                            I agree to the privacy policy and understand that my
                                            information will be kept confidential. *
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        data-oid="epwu:up"
                                    >
                                        <i
                                            className="fas fa-paper-plane mr-2"
                                            data-oid="q4o4r:n"
                                        ></i>
                                        Send Message
                                    </button>
                                </form>

                                <div
                                    className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200"
                                    data-oid="eotxxmo"
                                >
                                    <p className="text-green-800 text-sm" data-oid="ky-n0.4">
                                        <i className="fas fa-lock mr-2" data-oid="nrjmv78"></i>
                                        <strong data-oid="km.x_gv">
                                            Your privacy matters:
                                        </strong>{' '}
                                        All communications are confidential. We're here to support
                                        you without judgment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer
                className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8"
                data-oid="g89m.n7"
            >
                <div className="max-w-7xl mx-auto text-center" data-oid="fr70qp8">
                    <div className="text-2xl font-bold mb-4 font-merriweather" data-oid="le4apuw">
                        The Real Freedom
                    </div>
                    <p className="text-gray-300 mb-4" data-oid="iqvsqsd">
                        Freedom Through Christ – Break the Chains, Embrace Life
                    </p>
                    <p className="text-gray-400 text-sm" data-oid="_n2xxn9">
                        © 2024 The Real Freedom Ministry. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
