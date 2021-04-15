import React from 'react'
import { NavLink } from 'react-router-dom'

import { FinalProject, start, complete } from './ProgrammingAssignments'
const programmingAssignment = FinalProject

export const al20000Sprint08 = () => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 8: Final Project, Final Project, and more Final Project</h5>

<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
strong and deliver a Final Project that makes you proud. Don’t do it for me, don’t do it for the grade, do this one for 
yourself.</p>  

<p>Let's start with what we hope to learn in sprint 8:</p>
<ul style={{listStyleType:'square'}}>
	<li>Independently deliver and present meaningful working software</li>
</ul>

<p>Below is our sprint 8 activities list. </p>
<ol>
	<li><em style={{color:'red'}}>Stay laser focused on the due dates by reviewing our course calendar</em><NavLink to='/calendar/8'>[link]</NavLink></li>
	<li><em>Review Lab 8, Quiz 8, Discussion 8, Reflection 8, and Final Project Presentation</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Confirm your final project presentation date &amp; time</li>
    <li>Complete your Final Project application and Final Project presentation<sup> ~12 hours</sup></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 8, Lab 8, Quiz 8, Reflection 8, and Final Project Presentation</em></li>
	<li><em style={{color:'red'}}> Submit all assignments at least two hours prior to your <u>scheduled presentation time</u></em></li>

</ol>

<p>Let’s finish strong. It has been a sincere pleasure.</p>
</div>

	)
}