import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const Stories = () => {
  return (
    <div>
      <Navbar />
      <section
        className="bg-[url(https://oncomhfoundation.org/wp-content/uploads/2022/07/3D20AD18-6D5E-46AA-BB72-B71957E0501E.png-1.jpg)] 
bg-no-repeat h-[50vh] md:h-[90vh] bg-cover bg-fixed"
      >
        <div className="bg-black opacity-70 w-full h-full  py-[80px] md:py-[20%] text-white  px-[16px] md:px-[50px] lg:px-[100px]">
          <p className="text-[42px] md:text-[48px] lg:text-[72px] font-bold mb-[18px] md:mb-[24px] lg:w-[50%]">
            Our Cancer Stories
          </p>
          <div className="h-2 w-[60px] bg-yellow-500" />
        </div>
      </section>
      <section className="py-[60px] md:py-[80px] gap-[30px] px-[16px] md:px-[30px]  items-center  ">
        <div className="flex justify-between items-center w-[80%] md:w-[50%] lg:w-[40%] mx-auto mb-3">
          <div className="h-2 w-7 bg-orange-500" />{" "}
          <p className="font-semibold text-[18px] md:text-[20px]">
            SOME OF OUR
          </p>
          <div className="h-2 w-7 bg-orange-500" />
        </div>
        <h3 className="text-[#001c31] text-[20px] md:text-[24px] lg:text-[27px] text-center font-bold mb-[36px] md:mb-[50px]">
          CANCER STORIES
        </h3>

        <div className="flex flex-col gap-6 max-w-[600px] mx-auto">
          <div className="text-[#3c4050]">
            <p className="mb-3">Case 1:</p>
            <p className="mb-3">
              A 48yrs old widow with children who are still young and schooling.
            </p>
            <p>Nature: Breast Cancer</p>
            <p className="mb-3">Date she detected: March 2020</p>
            <p className="mb-3">
              Date she contacted the foundation: November 3, 2020 Stage cancer
              was reported: Stage III
            </p>
            <p className="mb-3">Reasons she contacted the foundation: money</p>
            <p>
              What she had done earlier: visited a facility where they place her
              on wrong drugs and false hope. The role the foundation played: the
              foundation attempted to advise her to use a suitable oncology
              facility, but the patient was referred to a private center due to
              delay and inaccessibility of the public facility they visited. The
              foundation then had to just support with funds, monitoring,
              professional networking and advise. Reports: the patient was
              billed for biopsy sampling, but the doctors realized that the case
              was an emergency, and then advised them for prompt mastectomy
              procedure. Mastectomy was done and the patient started the
              prescribed courses of chemotherapy. Outcome: the patient took the
              first chemotherapy, and on the 2nd chemotherapy visit, metastasis
              to the lung was confirmed by an X-ray, and the patient couldn’t
              make it. She died!
            </p>
            <p className="mb-3">
              Our Observations: The patient's outcome was constrained by
            </p>
            <ul className="mb-3">
              <li>• Poverty</li>
              <li>• Late presentation or detection</li>
              <li>• Inappropriate helps</li>
              <li>• Inaccessible oncology</li>
              <li>• Ignorance</li>
              <li>
                • Inappropriately trained oncology professionals, especially for
                chemo administration.
              </li>
            </ul>
            <p className="mb-2">
              Our further observation in relation to her medical handling are
              highlighted below:{" "}
            </p>

            <ol className="list-decimal flex flex-col gap-2">
              <li>The chemotherapy drugs administered got her hands burnt.</li>
              <li>
                The quality of the Chemotherapy drug could not be ascertained
                because it was bought in the open market.
              </li>
              <li>
                Her blood work-up and or results viz-a-viz therapeutic drug
                monitoring could not be ascertained before the next course of
                chemo administration.
              </li>
            </ol>

            <div className="mt-4">
              <h4 className="text-gray-700 font-semibold text-lg">
                Mrs Docas Okeowo
              </h4>
              <p className="text-red-700 font-bold text-lg">IKORODU</p>
            </div>
          </div>
          <div className="text-[#3c4050] mt-8 md:mt-10">
            <p className="mb-3">Case 2:</p>

            <p className="mt-3">Occupation; Civil servant</p>
            <p className="mb-3">Case: a sort of eye cancer</p>
            <p className="mb-3">
              History:
              <br />
              She first noticed that her eyes were itching, then she visited an
              hospital where they first told her she had a sort of eye cancer.
              She was advised to agree for surgical treatment which would
              involve excising the eye but she was very anxious and didn’t want
              to go ahead.
              <br />
              <br />
              She later was advised to seek a second opinion with our
              foundation, which she did. We enlightened her and encourage her to
              think more of saving her life than her eyes, and she reconsidered
              her decision. She was scheduled for pre-surgery treatments to
              include rounds of chemotherapy. She was taken through series of
              tests to include brain and neck CT scan and other requisite tests
              which she did.
              <br />
              She was later admitted for surgery, surgery done, the blood
              work-up revealed anaemia. She was transfused. But she died before
              she was discharged.
            </p>
            <p className="mb-3">
              Our Inference: Health financing is a major factor mitigating
              effective cancer treatment. Too much time was taken while the
              patient was looking for money to run the tests and procedures. The
              condition kept getting irredeemable taking advantage of the
              delays.
            </p>
            <p>
              The foundation sponsored the most of the treatment from surgery to
              chemotherapy.
            </p>
            <p className="mb-3">
              She pass away on the second application of chemotherapy.
            </p>

            <p className="mb-2">All treatment was done at LASUTH</p>

            <div className="mt-4">
              <h4 className="text-gray-700 font-semibold text-lg">
                Mrs Mubo Adegabi
              </h4>
              <p className="text-red-700 font-bold text-lg">LAGOS STATE</p>
            </div>
          </div>

          <div className="text-[#3c4050]">
            <p className="mb-3">Case 3:</p>
            <p className="mb-3">Occupation- Secondary school teacher</p>
            <p>
              Description: A 47yrs old divorcee with children, a high school
              teacher Nature: Breast Cancer
            </p>
            <p>Date she detected: not certain, but seemed early</p>
            <p>Date she contacted the foundation: November 2020</p>
            <p className="mb-3">Reasons she contacted: for money</p>
            <p className="mb-3">
              What she had done earlier: resorted to herbs and nature. She had
              been anxious of chemotherapy and she defiled the advise for
              orthodox procedures.
              <br />
              <br />
              The role the foundation played: We arranged counselling sessions,
              sponsored and finance more tests.
            </p>
            <p className="mb-3">
              Report: She absconded and refused every advice of orthodox
              procedures. She expressed her blunt reservations for chemotherapy
              because of it’s cytotoxic effect.
            </p>
            <p>
              Outcome: We got the report of our death after like 2 years that
              she absconded.
            </p>
            <p className="mb-3">
              Our Observations: The patient's outcome was constrained by
            </p>
            <p className="mb-2">
              Outcome: We got the report of our death after like 2 years that
              she absconded.
            </p>
            <ul className="mb-3">
              <li>• Depression</li>
              <li>• Delusion</li>
              <li>• Poverty</li>
              <li>• Mental stress</li>
              <li>• Inability to submit to superior idea</li>
            </ul>

            <div className="mt-4">
              <h4 className="text-gray-700 font-semibold text-lg">
                Mrs Docas Okeowo
              </h4>
              <p className="text-red-700 font-bold text-lg">IJEBU ODE</p>
            </div>
          </div>
          <div className="text-[#3c4050]">
            <p className="mb-3">Case 4:</p>
            <p className="mb-3">Description: A 49yrs old female</p>
            <p>Nature: advance Gastric cancer</p>
            <p>Date she detected: not certain</p>

            <p className="mb-3">
              What she had done earlier: she was in a standard hospital for
              investigations The role the foundation played: sought the best
              Oncology facility and professional for her to consider.
            </p>
            <p className="mb-3">
              Report: We got one of our oncologist who designed a suitable
              management guidelines for her.
              <br />
              <br />
              She was to be handled by multispecialty schedule, and with the top
              of the range cancer drugs, but the cost was very huge and seemed
              unaffordable to the patient, as well as the foundation.
            </p>
            <p className="mb-3">Outcome: She is still on management</p>

            <p className="mb-3">
              Our observation: • It is a huge cost to give quality management to
              combat cancer, and it seems that it’s a great task for just an
              individual to bear. African communities need a lot of
              intervention, as well as training in order to be equal to the task
              of fighting cancer.
            </p>
          </div>
          <div className="text-[#3c4050]">
            <p className="mb-3">Case 5:</p>
            <p className="mb-3">Description: A 42yrs old female</p>
            <p>
              Nature: initially diagnosed with invasive ductal carcinoma,
              advised to go for mastectomy, but absconded due to anxiety.
              Resorted to alternative care until it grew worse.
            </p>

            <p className="mb-3">
              Date she contacted the foundation: 10th August, 2021
            </p>
            <p className="mb-3">
              Reason she contacted the foundation: for financial support
            </p>
            <p className="mb-3">
              The role the foundation played: discussed her case with
              oncologists in our network, who drew up a management plan for her
              and offered to help with subsidized cost. She was advised to do
              some rounds of chemotherapy before surgery, then further chemo.
              <br />
              <br />
              Report: the patient could not raise enough money to complement the
              support the foundation could afford to give, then she sourced for
              Doctor who would just do the surgery right away. The foundation
              couldn’t put up with such a dangerous management approach and the
              patient absconded to self help.
              <br />
              <br />
              Outcome: we couldn’t follow up
            </p>

            <p className="mb-3">Our observation:</p>

            <ul className="mb-3">
              <li>
                • Fear of medical invasive procedure, especially mastectomy
              </li>
              <li>
                • Lack of fund for appropriate management or treatment plan.
              </li>
              <li>• Poverty</li>
            </ul>

            <div className="mt-4">
              <h4 className="text-gray-700 font-semibold text-lg">
                Mrs Docas Okeowo
              </h4>
              <p className="text-red-700 font-bold text-lg">IJEBU ODE</p>
            </div>
          </div>
          <div className="text-[#3c4050]">
            <p className="mb-3">Case 6:</p>
            <p className="mb-3">
              Profession - A trader Diagnosis - Cancer of the cervix
            </p>
            <p>
              Her Case Profiling:
              <br />
              Allegedly, she was diagnosed by a Gynecologist at a private
              hospital. Surgery was performed, biopsy taken and analysed. Her
              histology reportedly revealed a first stage Ovarian cancer. She
              reportedly underwent 2 rounds of chemotherapy in the same
              hospital, but absconded due to her fear of complications from the
              chemo.
            </p>

            <p className="mb-3">
              She was said to have experience a relapse few months after and
              went for second consultation after which she was referred to the
              University College Hospital, Nigeria.. She was scheduled on 6
              courses chemotherapy, and unfortunately she died few hours after
              the 6th course, reportedly due to Anemia.
            </p>
            <p className="mb-3">Our Inference:</p>

            <ul className="mb-3">
              <li>• This patient had money to treat herself</li>
              <li>
                • She was not handled by a professional oncologist i.e. adequate
                and proper referral wasn’t doneShe was not handled by a
                professional oncologist
              </li>
              <li>• Patient counselling and follow up was not adequate</li>
              <li>
                • Proper therapeutic drug monitoring could have been done to
                avert anemia.
              </li>
              <li>
                • Largely, there is paucity of adequate oncology facilities,
                professionals, and trainings in Nigeria
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-gray-700 font-semibold text-lg">Mrs Osho</h4>
            </div>
          </div>
          <div className="text-[#3c4050]">
            <p className="mb-3">Case 7:</p>
            <p className="mb-3">Age:10</p>
            <p className="mb-3">
              Diagnosis: Brain tumor in June 17,2021 at Babcock University
              Teaching Hospital, Ilishan, Ogun State.
            </p>

            <p className="mb-3">
              Preliminary surgery was carried out on her on June 21,2021.
              <br />
              <br />
              The first surgery cost #2.4million Naira which was raised from
              family, friends and loans.
              <br />
              <br />
              She had her major surgery on September, 29,2021 and that also cost
              us a sum of #3million naira.
              <br />
              <br />
              Thereafter, she was referred to Luth for Radiation and
              Chemotherapy was concluded on December, 29,2021 at the sum of
              about #2.5million.
              <br />
              <br />
              The first stage was carried out on Wednesday, January 26,2022
              while the second stage is to be carried out on March 28,2022.
              <br />
              <br />
              Our foundation help them to raise money for two sections of the
              chemotherapy. We also rendered counseling and other support.
            </p>

            <div className="mt-4">
              <h4 className="text-gray-700 font-semibold text-lg">
                Hassan Oluwamayowa
              </h4>
              <p className="text-red-700 font-bold text-lg">ISONYIN IJEBU</p>
            </div>
          </div>

          <div className="text-[#3c4050]">
            <p className="mb-3">Case 8:</p>
            <p className="mb-3">
              LOCAL GOVERNMENT- ABEOKUTA SOUTH
              <br />
              <br />
              STATUS - MARRIED
              <br />
              <br />
              OCCUPATION - TRADER
            </p>
            <p>
              The cancer was detected June 2021 and it was on stage 4 then ,no
              underline ailment prior to that time .
              <br />
              <br />
              She has been given water ,blood and Augmentin so far in all
              hospitals visited.
              <br />
              <br />
              No surgery has been carried out except when the lump was
              discovered in her breast in June and removed while a test that was
              done on the lump revealed the cancer is on stage 4.
              <br />
              <br />
              Her present health condition is poor ,her right breast has swollen
              up and heavy while the left breast maintains the normal shape.
              <br />
              <br />
              The hospital where the lump was discovered and surgery carried out
              is FIRST CONTACT HOSPITAL ,KUTO,ABEOKUTA ,OGUN STATE
            </p>

            <p className="mb-3">
              She was said to have experience a relapse few months after and
              went for second consultation after which she was referred to the
              University College Hospital, Nigeria.. She was scheduled on 6
              courses chemotherapy, and unfortunately she died few hours after
              the 6th course, reportedly due to Anemia.
            </p>
            <p className="mb-3">Our Inference:</p>

            <ul className="mb-3">
              <li>• This patient had money to treat herself</li>
              <li>
                • She was not handled by a professional oncologist i.e. adequate
                and proper referral wasn’t doneShe was not handled by a
                professional oncologist
              </li>
              <li>• Patient counselling and follow up was not adequate</li>
              <li>
                • Proper therapeutic drug monitoring could have been done to
                avert anemia.
              </li>
              <li>
                • Largely, there is paucity of adequate oncology facilities,
                professionals, and trainings in Nigeria
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-gray-700 font-semibold text-lg">
                Mrs Temitope Latifat
              </h4>
              <p className="text-red-700 font-bold text-lg">OTA, OGUN STATE</p>
            </div>
          </div>

          <div className="text-[#3c4050]">
            <p className="mb-3">Case 9:</p>
            <p className="mb-3">Date: Monday, 7th March, 2023 </p>
            <p className="mb-3">
              Biodata and Family history:
              <br />
              <br />A 16yrs old female, currently in SS3 at OLAS secondary
              school, Ijebu Ode. She is being raised by her father who is a PTA
              teacher with a very low income, and her aged maternal grandparents
              whom she currently lives with. Her mother died when she was 10yrs
              old leaving her and her only brother. Her father remarried just
              recently, the major reason they opted to live away from home, to
              live with the grandparents.
            </p>

            <p className="mb-3">
              Case history:
              <br />
              <br />
              She reportedly started having lower abdominal pain in early July
              2022, and the guidance promptly attempted to treat her with herb
              preparations which names and compositions we couldn’t ascertain.
              This attempt did not resolve the problem, and towards the end of
              same July, they took her to Elshaddai Hospital in Ijebu Ode for
              medical attention. According to the report given to us, at
              Elshaddai, they conducted series of tests, and they diagnosed her
              of having infection. She was then admitted and placed on treatment
              regimens pre and post admission. She reported that that her
              symptoms subsided for a short while, but resurged after the short
              while.
              <br />
              <br />
              She was taken to Lagos by an aunt, where they again visited a
              hospital (name couldn’t be ascertained) where they again conducted
              series of tests on her, and just concluded she was having Pelvic
              inflammatory Disease (PID) and pile. She was again treated but
              there was no significant improvement. She returned to Ijebu Ode,
              and at this time she noticed that her menstruation has stopped.
              Curiously, she was again taken to Elshaddai hospital where she had
              visited before, to complain. There they hurriedly assumed it was
              pregnancy until they conducted tests and proved otherwise.
              <br />
              <br />
              She then was taken to DETOMI hospital in Ijebu Ode. The Clinician
              there took her history and discovered she could be having a tumor.
              He referred her to Ogun State University Teaching Hospital (OSUTH)
              where they conducted series of tests to include Abdomino-pelvic
              scan, Abdominal CT, MRI, and biopsy histology. All results pointed
              to “Anorectal Adenocarcinoma” with possible invasion to peripheral
              tissues. Based on this diagnosis, she was placed on a management
              regimen of 6 rounds of chemotherapy. She has taken the first
              round. The second round will be due this Friday, 10th March, 2022.
              Based on the first round which cost an estimate of seventy-six
              thousand naira (N76,000.00), they expect the second to be somewhat
              lower. But there is currently a financial incapability on the part
              of the father, and the family. That is the major reason for
              consulting the Oncology Medical and Health Foundation for
              financial support. The foundation Initial Assessment:
              Representatives of the foundation met with the family on the 7th
              March, 2023, and took her history as enumerated above.
              <br />
              <br />
              Further to that, we provided detailed counseling and we
              surprisingly observed that the girl would do well, if her
              psychosocial wellbeing can be attended to especially by her
              father, and the bigger family. She was largely depressed due to
              some un-favourable family factors which she narrated to us. We as
              such counseled the father with her, and the father promised to
              adjust favorably.
              <br />
              <br />
              Again, the foundation made provision to check her blood level
              (PCV), so as to ascertain if she is not anemic, as she prepares to
              go for another round of chemotherapy: she was reportedly anemic,
              and she took 3 pints of blood prior to the first chemotherapy. Her
              post transfusion PCV was reportedly 33%. Her PCV 31% when we
              checked and we considered this to be fair for 2 weeks after
              transfusion.
              <br />
              <br />
              Though, the foundation representatives made it clear that the time
              is very short to commit to raising fund for them. We are still
              hopeful to be able to support.
            </p>

            <p className="mb-3">
              Conclusion:
              <br />
              <br />
              We recommend her for support from all quarters; not only for this
              round of chemotherapy, but also for the other rounds till she
              completes her doses. We also hopes to follow up on how well she is
              adjusting to a better psychosocial needs.
            </p>

            <div className="mt-4">
              <h4 className="text-gray-700 font-semibold text-lg">
                ORESOTU Oluwapelumi
              </h4>
              <p className="text-red-700 font-bold text-lg">IJEBU ODE</p>
            </div>
          </div>
          <div className="text-[#3c4050]">
            <p className="mb-3">Case 10:</p>
            <p className="mb-3">A 14 years old girl diagnosed of cancer of the blood and still undergoing treatment at LASUTH. It started with an abdominal pain and on getting to general hospital, test where carried out and the sickness was discovered. She's still undergoing treatment.</p>
            
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Stories;
