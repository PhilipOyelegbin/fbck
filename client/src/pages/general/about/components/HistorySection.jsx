import { Link } from "react-router-dom";

function HistorySection() {
  return (
    <section className='max-w-7xl w-full py-10 px-5 md:px-20 space-y-3'>
      <h3 className='text-3xl text-center font-bold text-blue-500'>About Us</h3>
      <p>
        First Baptist Church Kosofe was founded in 1924. It became an autonomous
        local congregation of believers in Christ in 1926. During the Lagos
        State Baptist Conference/First Baptist Church Houston Texas Crusade in
        1991, our friends from Houston who worshipped with us named us “THE
        HAPPY PEOPLE.” The church belongs to the worldwide family of Baptist
        through the{" "}
        <Link
          to='https://nigerianbaptist.org'
          className='underline text-blue-500'>
          Nigerai Baptist Convention.
        </Link>
      </p>

      <h4>Our COmmitment</h4>
      <p>
        The great commission, as contained in Matthew 28:19-20 means a lot to
        us. We dedicate our resources to:
      </p>
      <ul className='list-disc list-inside'>
        <li>
          Reaching out in multiple ways in order to reconcile the unsaved souls
          with God.
        </li>
        <li>
          Teaching biblical truths and obedience to the commands of Christ.
        </li>
        <li>
          Ensuring the total development of the saved by facilitating their
          spiritual development and sharpening their skills of ministering to
          others.
        </li>
        <li>
          Ensuring that we remain a worshipping fellowship in which man
          encounters God.
        </li>
      </ul>

      <h4>We Commit Ourselves To</h4>
      <ul className='list-disc list-inside'>
        <li>Worshipping God</li>
        <li>Instructing men</li>
        <li>Fellowshipping with believers</li>
        <li>Evangelizing the World</li>
      </ul>

      <h4>What We Exist For</h4>
      <ul className='list-disc list-inside'>
        <li>
          Our church is a community of believers in Jesus Christ whose goal is
          to provide a place for Restoring and deepening relationship with God
          and others.
        </li>
        <li>
          Our Model is Christ. We focus on people. We see programmes and Church
          activities as vehicles to reaching, winning and developing people.
        </li>
        <li>
          Our vision is to equip (through teaching, training and care) every
          saved person in our community, to serve both the Lord and others as
          vessels of honour.
        </li>
        <li>
          Our measurable objectives include an increase in number of transformed
          lives that worship the living Lord in our local Church
        </li>
      </ul>
    </section>
  );
}

export default HistorySection;
