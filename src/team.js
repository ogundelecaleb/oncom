import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const Team = () => {
  const [continue1, setContinue1] = useState(false);
  const [continue2, setContinue2] = useState(false);
  return (
    <div>
      <Navbar />{" "}
      <section className="py-[36px] md:py-[42px] lg:py-[70px] px-4 md:px-[40px] lg:px-[70px] bg-white">
        {" "}
        <p className="text-[42px] md:text-[48px] lg:text-[72px] font-bold mb-[18px] md:mb-[24px] lg:w-[50%]">
          Our Team
        </p>
        <div className="h-2 w-[90px] bg-yellow-500  " />
      </section>
      <section className="py-[36px] md:py-[42px] lg:py-[70px] px-4 md:px-[40px] lg:px-[70px] bg-slate-50">
        <p className="text-center text-[20px] md:text-[28px] font-semibold text-gray-500 mb-6 md:mb-[40px]">
          Board Of Trustees
        </p>

        <ul className=" flex flex-col gap-[36px] md:gap-[70px]">
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-11-22-at-12.50.08-PM-py3rnmni068cf9hh694xrhngt4eyic112fsd8ed6cw.jpeg"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Prince Adeyemi Adefulu, MFR
              </h3>
              <p className="text-[14px] text-gray-500">
                Lawyer, publisher and writer on contemporary issues, Adefulu
                attended Kings College Lagos and the University of Lagos where
                he was President of the University of Lagos Students Union and
                Vice-President, National Union of Nigerian Students NUNS. A
                multiple winner of academic prizes, he was the best graduating
                student at the Nigerian Law School in June, 1972. He worked with
                the law firm of GANI FAWEHINMI & Co pre and post the Nigerian
                Law School. On 6th November, 1972, he co-founded the corporate
                law firm of ODUJINRIN & ADEFULU, a foremost commercial law
                practice in Nigeria, and 50 years on it is the oldest active and
                subsisting law partnership in Nigeria. Adefulu also served as
                Commissioner in the Ministries of Health & Social Welfare,
                Forestry & Water Resources and Home Affairs in Ogun State
                between 1979-1983.
                <br />
                <br /> The law firm of ODUJINRIN & ADEFULU has been most active
                in the area of commercial law working for major national and
                international companies over the years. It has been very active
                in the implementation of major national economic policies like
                indigenization, privatization and commercialization. After many
                years of active legal practice, as a way of creating value for
                the profession, Adefulu championed the establishment of Odade
                Publishers– a specialist law publishing firm which partnered
                with Lexis Nexis, the global law publishing company, to publish
                the iconic Laws of the Federation of Nigeria 2004, which, to
                date, remains the largest single publication that has been
                undertaken in Africa. The first print run of the Laws of the
                Federation of Nigeria ran to over 80 million pages.
              </p>

              {continue1 && (
                <span className="text-[14px] text-gray-500">
                  The partnership also undertook the publication of nearly
                  twenty state Laws and several law texts. It is the largest
                  publisher of state laws in the history of Nigeria. A
                  consummate businessman, professional and administrator, he has
                  served on the board of several companies including Gateway
                  Bank Plc, Odade Investments Ltd etc A Past National President
                  of the University of Lagos Alumni Association, he is also a
                  past President and Chairman of Council of the Nigerian-British
                  Chamber of Commerce.For over two years he represented Africa
                  on the board of the Global Accreditation Board of the British
                  Chamber of Commerce in London with members drawn from
                  different parts of the world. He currently chairs the board of
                  GraceCo Industries Ltd Ltd a fast-growing Nigerian food and
                  snacks company, Funmi Stores Nigeria Ltd. a distribution
                  company and The Green Acre Ranch. He is also the Chairman of
                  Council of the Tai Solarin College of Education, Omu, Ijebu. A
                  public-spirited man with a sharp social conscience, he was
                  awarded the Gold Award of the Council of the University of
                  Lagos in 1991 for his “meritorious services to the University
                  of Lagos” on the 30th anniversary of the university. He is a
                  Fellow of the Institute of Chartered Secretaries ICSAN. In
                  2008 he was conferred with the National honour of Member of
                  the Order of the Federal Republic (MFR) by President Yar’Adua
                  for his contribution to the development of Nigerian laws and
                  other public services. A widely travelled man, an avid reader,
                  writer and speaker he is a man of many achievements. He is a
                  committed family man who has been happily married for nearly
                  50 years to his childhood love,Mrs. Ololade Omoyeni Adefulu a
                  retired High School Principal. The couple is blessed with
                  children and lovely grandchildren.
                </span>
              )}
              <div
                onClick={() => setContinue1(!continue1)}
                className="underline text-blue-600 cursor-pointer text-[12px]"
              >
                {continue1 ? "Colapse" : "Continue reading"}
              </div>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/PhotoGrid_1661767509517-ptz17jo8li7khy9do5b7jbq7ygbt5iv0olza2vnu5s.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Owonikoko Taofeek Kunle
              </h3>
              <p className="text-[14px] text-gray-500">
                Taofeek Kunle Owonikoko is an American physician who is
                Professor and Vice-Chair for Faculty Development, Department of
                Haematology and Medical Oncology at the Winship Cancer
                Institute. His research considers small cell lung cancer. He was
                a 2019 Emory University Woodruff Leadership Academy Fellow.
                Place of birth: Nigeria Citations: 35,040 Affiliation:
                University of Pittsburgh Research interests: Translational
                oncology research, Lung Cancer Management, more Dr.Taofeek
                Owonikoko was named Chief of the Division of Hematology 16 Apr
                2021 — Owonikoko, MD, PhD, as the new Chief of the Division of
                Hematology/Oncology at the UPMC Hillman Cancer Center and in the
                Department of Medicine
                <br />
                <br />
                Taofeek K. Owonikoko, MD, PhD. Hematology/Oncology. Professor of
                Medicine, Division of Hematology-Oncology. Division Chief,
                Division of Hematology-Oncology.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/PhotoGrid_1661769844898-ptz2hbfbe2v7udrxefk7g9x9awq8yxkhb5lgcxsp68.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Adetoro Abiola Oladunni
              </h3>
              <p className="text-[14px] text-gray-500">
                Abiola Adetoro is a trained English and Religious studies
                teacher of over twenty six years standing. She also received a
                Diploma in Public Administration from Obafemi Awolowo University
                Ile-Ife in the year 2000. Abiola taught at various schools
                within 1996-2001 in Ijebu-Ode before resigning from teaching and
                venturing into private business (Merchandising, and Faming). Her
                interest in cancer related issues spurred from the loss of her
                father to Prostate cancer in 2018 and fund raising awareness
                campaign organized by her family as part of the burial rites of
                her father with donations made to an NHS hospice in London. She
                has had a robust interaction with a cancer prevention advocacy
                group in London who once sought for her help in extending their
                advocacy work in Nigeria. She is married with children.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/PhotoGrid_1661767525496-ptz17pb9qifafm16r7qyyaazirk0fphepdw6yjfh4g.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Dr Ipaye Babatunde
              </h3>
              <p className="text-[14px] text-gray-500">
                Babatunde, the immediate past Honourable Commissioner for Health
                in Ogun State is an outstanding Public Health, Governance and
                Management Specialist with twenty-nine (29) years progressive
                experience in health care delivery at all levels; public and
                private. He helped managed several international donor disease
                control awards including the World Bank, Global Fund and UK-DFID
                funded projects on HIV/AIDS, Malaria, Institutional Development
                and Knowledge Management. Babatunde has also provided high level
                technical support to many Nigeria health programmes as well as
                multi-country technical assistance on health policy and
                programme reviews. He graduated from Ogun State University with
                a Bachelor of Medicine and Bachelor of Surgery degree in 1992 as
                the overall best doctor winning 5 university prizes including
                the university chancellor’s prize. He was also the best
                graduating doctor from departments of Paediatrics and Medicine.
                After his mandatory national service at the Delta State
                University Health Centre, Abraka, Delta State, he worked as a
                medical officer at the Victory Specialist Hospital, Ijebu-Igbo,
                before he established Idunnu Hospital, Ijebu Igbo, Ogun State in
                December 1995.
              </p>

              {continue2 && (
                <span className="text-[14px] text-gray-500">
                  Babatunde is a Fellow of the prestigious West African College
                  of Physicians (FWACP) in Community Health and holds a master’s
                  degree in public health from University of Lagos. He is also a
                  member of the National Postgraduate Medical College of Nigeria
                  and trained at the Royal Institute of Public Administration,
                  UK, in Organisational Behaviour and Change Management. He was
                  lecturer of Community Medicine and Primary Care at Olabisi
                  Onabanjo University; he taught health management at
                  undergraduate and postgraduate levels. Babatunde was employed
                  by FHI 360 in May 2008 as the Senior Technical Response
                  Coordinator of the UK Department for International Development
                  funded SNR Project where he coordinated SNR’s technical
                  support to six states of Enugu, Cross Rivers, Kaduna, Benue,
                  Nassarawa and FCT. In 2009, he was hired by Malaria Consortium
                  as the long-term Technical Advisor to National Malaria Control
                  Program (NMCP) through the UK-DFID funded SuNMaP project.
                  Babatunde thereafter became a consultant Health and HIV/AIDS
                  Advisor to United Kingdom’s Department for International
                  Development (DFID) in Nigeria supervising the GBP 118 million
                  ENR Project. In May 2011, he was engaged by WHO as external
                  reviewer of Ethiopian Malaria Programme Review and the
                  development of revised Ethiopian Malaria Strategic Plan. He
                  also supported The Carter Centre, Atlanta, USA, in the
                  development of her first annual malaria plan for Nigeria.
                  Babatunde has supported several health missions to Kenya,
                  Zambia, Rwanda, Ghana, Senegal, South Africa, and Uganda.
                  Between February 2012 and October 2015, he was consultant
                  HIV&AIDS Specialist and the in-country lead for the $250
                  million World Bank HIV & AIDS Program Development Project from
                  where he was appointed the Honourable Commissioner of Health
                  in Ogun State.
                </span>
              )}
              <div
                onClick={() => setContinue2(!continue2)}
                className="underline text-blue-600 cursor-pointer text-[12px]"
              >
                {continue1 ? "Colapse" : "Continue reading"}
              </div>
            </div>
          </li>

          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-11-22-at-12.50.09-PM-py3rq8nczlt0o9oxxdrmotxk7njnw2e6rd0x82ht2o.jpeg" />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Dr Famuyiwa Felix Olusoji
              </h3>
              <p className="text-[14px] text-gray-500">
                Born May 14th 1966 EDUCATION St,Patrick’s catholic school yaba
                1972-78
                <br />
                Govt college Ikorodu 1978-83
                <br />
                St Gregory’s college ALevels 1983-85
                <br />
                OBAFEMI AWOLOWO UNIVERSITY BDS 1985-92
                <br />
                WORKING EXPERIENCE Lagos Health service commission Director LS
                DENTAL SERVICES TO DATE
                <br />
                GBAGADA GENERAL HOSPITAL Director of Clinical Services and
                Training II.
                <br />
                HOD DENTAL CLINIC Feb 2020 to date.
                <br />
                GENERAL HOSPITAL LAGOS Director of Clinical Services
                <br />
                Service Delivery Director GHL
                <br />
                Quality Improvement Director GHL *<br />
                GENERAL HOSPITAL BADAGRY*: DEPUTY MEDICAL DIRECTOR 2006-2013
                <br />
                HOD DENTAL CLINIC,
                <br />
                MASSEY ST CHILDREN HOSPITAL HOD DENTAL QUALITY IMPROVEMENT
                OFFICER 2002-2006
                <br />
                GENERAL HOSPITAL EPE . HOD DENTAL CLINIC 1996-2002
                <br />
                NYSC DEPT OF ORAL& MAXILLOFACIAL SURGERY GHL 1994-95
                <br />
                HOUSEMANSHIP 1993-94 GHL
                <br />
                ADDITIONAL TRAINING IN HEALTHCARE MANAGEMENT AND QUALITY
                IMPROVEMENT.
                <br />
                BASIC AND ADVANCE HOSPITAL ADMINISTRATION
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/PhotoGrid_1661767587590-ptz183eul0yl9rgpgvudhoqwfjmin61drboh5oukj4.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Adeboyejo Fatai Adebayo
              </h3>
              <p className="text-[14px] text-gray-500">
                An experienced, and dedicated land administrator and real estate
                professional specializing in real estate development with
                passion for intensive land management and housing development. I
                have been involved in large-scale programs on Land Title
                Registration; Home-Owner’s Charter Program, and the World Bank
                Property Taxation Program in Ogun State.
                <br />
                <br />A Land Administrator who has ability to grasp new concepts
                swiftly and adapt to changes in Land Administration System. I
                display confidence in roles which require high level of
                diligence, strong team work and advanced problem-solving skills
                with dedication to achieving uncompromising quality of work
                under stringent deadlines.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="py-[36px] md:py-[42px] lg:py-[70px] px-4 md:px-[40px] lg:px-[70px] bg-slate-50">
        <p className="text-center text-[20px] md:text-[28px] font-semibold text-gray-500 mb-6 md:mb-[40px]">
        Management Board
        </p>

        <ul className=" flex flex-col gap-[36px] md:gap-[70px]">
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/PhotoGrid_1661769844898-ptz2hbfbe2v7udrxefk7g9x9awq8yxkhb5lgcxsp68.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Adetoro Abiola Oladunni
              </h3>
              <h4 className="text-red-500">Executive Director</h4>
              <p className="text-[14px] text-gray-500">
                Abiola Adetoro is a trained English and Religious studies
                teacher of over twenty six years standing. She also received a
                Diploma in Public Administration from Obafemi Awolowo University
                Ile-Ife in the year 2000. Abiola taught at various schools
                within 1996-2001 in Ijebu-Ode before resigning from teaching and
                venturing into private business (Merchandising, and Faming).
                <br />
                <br />
                Her interest in cancer related issues spurred from the loss of
                her father to Prostate cancer in 2018 and fund raising awareness
                campaign organized by her family as part of the burial rites of
                her father with donations made to an NHS hospice in London. She
                has had a robust interaction with a cancer prevention advocacy
                group in London who once sought for her help in extending their
                advocacy work in Nigeria. She is married with children.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/PhotoGrid_1661767716988-ptz18ig9mdj6fiuv12celky9xpke2bp35e48u489rk.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Alhaja Adenusi
              </h3>
              <h4 className="text-red-500">Counseling</h4>
              <p className="text-[14px] text-gray-500">
                Adenusi Yetunde S is a retired civil servant with Ogun State
                local government service commission .She is a Social Worker that
                ensures the development of Women folks through various workshops
                and seminars, people with Special needs (disabled) as well as
                HIV/AIDS victims.She has a Diploma in Social Work and Degree in
                Guidance and Counseling.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/PhotoGrid_1661767625363-ptz189zpwv7lj175egorh534l8q351ri488vimktbk.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Olutola Omiwole
              </h3>
              <h4 className="text-red-500">Research</h4>
              <p className="text-[14px] text-gray-500">
                Olutola Omiwole is both a professional manager and a Medical
                Laboratory Scientist. He pioneered and headed the Medical
                Laboratory Services of Otunba Tunwase National Paediatric
                Centre-Ijebu Ode, which later became a subsidiary of the
                University of Ibadan, and UCH, until 2018, when he moved on to
                start Omnistiks Diagnostic Medical Services. He believes in
                bringing corporate values to the medical space, for quality data
                generation and prompt client satisfaction. Olutola holds both
                Bachelor and Masters Degrees in Medical Laboratory Science, and
                Chemical Pathology respectively, and also holds a MBA Degree
                with bias in Human Resource Management. He is an Associate
                member of the Medical Laboratory Science Council of Nigeria, as
                well as a member of the Nigerian Institute of Management. He has
                had leadership, and management courses, as well as research
                trainings both in home and abroad institutions. His goal is to
                provide strong leadership for quality oriented diagnostics and
                medical research systems, especially in resource limited
                settings.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-22-at-12.50.09-PM-2-300x300.jpeg"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Oludare. F. ADEYEMI
              </h3>
              <h4 className="text-red-500">Medical Adviser</h4>
              <p className="text-[14px] text-gray-500">
                Consultant, Clinical & Radiation Oncologist
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-11-22-at-12.50.09-PM-1-py3rq6rolxqg11ro8cydjuen0vsxgo6q33py9iklf4.jpeg"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Adebayo Osikomaya, Esq
              </h3>
              <h4 className="text-red-500">Legal Adviser</h4>
              <p className="text-[14px] text-gray-500">
                An astute lawyer who has been involved in legal practice,
                banking and financial advisory for over two(2) decades.
                <br />
                <br />
                He is passionate about development, welfare and improvement of
                people and the society.
                <br />
                <br />
                He was a pioneer staff of Providusbank with several banking
                experience in several fields of banking.
                <br />
                <br />
                He was elected the pioneer Executive Chairman of Ijebu East
                Central Local Council Development Area, a political office he
                occupied between 2016-2019.
                <br />
                <br />
                He is currently the Principal Partner in one of the growing law
                firms in Lagos, Nigeria.
                <br />
                <br />
                Hon. Osikimaiya is happily married to Dr. Bodunrin Osikomaiya, a
                Consultant Haematoligist and the marriage is blessed with
                Children.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/2022/08/PhotoGrid_1661767686941.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Amuludun Aishat Motunrayo
              </h3>
              <h4 className="text-red-500">Program Officer</h4>
              <p className="text-[14px] text-gray-500">
                Amuludun Aishat Motunrayo is a graduate of Mass Communication
                from Tai Solarin University of Education, Ijagun, Ijebu-Ode. She
                also received a Diploma in French from L’Institut Universitaire
                Panafricaine (IUP), Bénin Republic in the year 2016. Her
                Interest in cancer related issues is from the fact that Cancer
                is underrated and people don’t really have much knowledge to
                live with it or care for a cancer patient.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-11-22-at-12.51.06-PM-1-py3rq22hnrk0ezyhzsx8pdlc1yg3e6o2eggiv4rka8.jpeg"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Hassan Odunuga
              </h3>
              <h4 className="text-red-500">Site Manager</h4>
              <p className="text-[14px] text-gray-500">
                Alhaji Hassan Odunuga, has been the company’s manager/supervisor
                for Accumen investment Ltd since 2014.
                <br />
                <br />
                He gave it all in 2017 when the focus changed from business
                venture to a call to serve humanity.
                <br />
                <br />
                His dedication is absolute and his contribution is immensely
                immeasurable. It has been a total commitment.
                <br />
                <br />
                He could be described as the engine room of the project site.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-11-22-at-12.51.06-PM-2-py3rpz8z39g5g62lg9pczway9stzr3cve2i2favqsw.jpeg"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Olamide Adefulu
              </h3>
              <h4 className="text-red-500">Assistant Supervisor</h4>
              <p className="text-[14px] text-gray-500">
                Adefulu Olamide Abdulrahman, a graduate from the University of
                Lagos with a BSc degree in Business Administration.
                <br />
                <br />
                He is currently the Assistant Supervisor at the Cancer and
                Oncology Research Institute, Ososa-Ijebu
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-[30px]">
            <div className="w-full md:w-[50%]">
              <img
                src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-11-22-at-12.51.06-PM-py3rq3y61fml27vrotqhud498q6ttkvj2prhtoorxs.jpeg"
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-[18px] md:text-[22px] font-medium mb-3">
                Kodjo Adakanou
              </h3>
              <h4 className="text-red-500">Chief Gardener</h4>
              <p className="text-[14px] text-gray-500">
                Adakanou Kodjo John, a professional gardener, has been with the
                company since 1999 as the official gardener at the farm in
                Ilefon from 1999 to 2006.
                <br />
                <br />
                He came back at the inception of the project in 2017 to continue
                as the Chief Gardener He is a Capenter by training but he has
                capacity for nearly all vocations.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
