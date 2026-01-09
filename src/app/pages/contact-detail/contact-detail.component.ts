import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from '../../core/services/request.service';
import { MainRequestServiceService } from '../../core/services/main-request-service.service';
import { HttpClientModule } from '@angular/common/http';

interface ChatMessage {
  sender: 'user' | 'bot' | 'system';
  text: string;
}

@Component({
  selector: 'app-contact-detail-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.scss',
  providers: [MainRequestServiceService, RequestService]
})
export class ContactDetailComponent implements OnInit {
 contactDetail: any;

  @Input() selectedAgent!: string;

 
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private toastr: ToastrService, private requestService: RequestService) {

  }

  ngOnInit(): void {
  }


    message = '';
  chats: ChatMessage[] = [
    { sender: 'system', text: 'Generation stopped by user.' },
    {
      sender: 'user',
      text: 'Give me the list of Top 5 Employees, Loan Remaining Amount and what is the Total Loan Remaining Amount as well.'
    },
    {
      sender: 'bot',
      text: `Certainly! Let's look into the loan data.\n
Based on the highest remaining loan amounts, here are the top 5 employees:

1. Chloe Harris: $58,053
2. Olivia Brown: $54,072
3. Brittany Davis: $49,986
4. Samantha White: $46,404
5. Kimberly Wilson: $31,751

The Total Loan Remaining Amount across all employees with outstanding loans is $273,083.`
    }
  ];

  sendMessage() {
    if (!this.message.trim()) return;

    this.chats.push({
      sender: 'user',
      text: this.message
    });

    this.message = '';
  }

}
