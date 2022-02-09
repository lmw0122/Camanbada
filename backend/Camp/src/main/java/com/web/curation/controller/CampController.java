package com.web.curation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.curation.model.dto.CampingBasicDTO;
import com.web.curation.model.dto.CampingDetailDTO;
import com.web.curation.model.service.CampingBasicService;
import com.web.curation.model.service.CampingDetailService;

import io.swagger.annotations.ApiOperation;
import springfox.documentation.spring.web.json.Json;

@RestController
@RequestMapping("/camp")
public class CampController {
	
	@Autowired
	private CampingBasicService campingBasicService;

	@Autowired
	private CampingDetailService campingDetailService;

	@ApiOperation(value = "캠핑장 기본 정보 확인", notes = "캠핑장 ID를 통해 해당하는 캠핑장의 기본정보를 조회한다.", response = Json.class)
	@GetMapping(value = "/basic/one/{campId}")
	public CampingBasicDTO getOneCampingBasicById(@PathVariable Integer campId) {
		return campingBasicService.getOneCampingBasicById(campId);
	}
	
	@ApiOperation(value = "캠핑장 상세 정보 확인", notes = "캠핑장 ID를 통해 해당하는 캠핑장의 상세정보를 조회한다.", response = Json.class)
	@GetMapping(value = "/detail/one/{campId}")
	public CampingDetailDTO getOneCampingDetailById(@PathVariable Integer campId) {
		return campingDetailService.getOneCampingDetailById(campId);
	}
	
	@ApiOperation(value = "전체 캠핑장 리스트 검색", notes = "전체 캠핑장의 기본 정보를 반환한다. ", response = Json.class)
	@GetMapping(value = "/basic/all")
	public List<CampingBasicDTO> getListCampingBasicAll() {
		return campingBasicService.getListCampingBasicAll();
	}
	
	@ApiOperation(value = "키워드별 캠핑장 리스트 검색", notes = "키워드를 입력받아, 키워드를 포함하는 캠핑장의 기본 정보를 반환한다. ", response = Json.class)
	@GetMapping(value = "/basic/list/{keyword}")
	public List<CampingBasicDTO> getListCampingBasicByKeyword(@PathVariable String keyword) {
		return campingBasicService.getListCampingBasicByKeyword(keyword);
	}
	
//	@ApiOperation(value = "지역별 캠핑장 리스트 검색", notes = "선택한 지역 정보를 받아, 해당 지역에 있는 캠핑장의 기본 정보를 반환한다.", response = Json.class)
//	@GetMapping(value = "/basic/list/{location}")
//	public List<CampingBasicDTO> getListCampingBasicByLocation(@PathVariable String location) {
//		return campingBasicService.getListCampingBasicByLocation(location);
//	}
	
	
	
//	보류 : 상세정보리스트에 위도 경도가 포함돼있음.
//	@ApiOperation(value = "캠핑장 위치 확인", notes = "선택한 캠핑장의 위도와 경도를 반환한다.", response = Json.class)
//	@GetMapping(value = "/basic/{keyword}")
	
//	보류 : 상세정보리스트에 주변시설이 포함돼있음
//	@ApiOperation(value = "캠핑장 주변시설 확인", notes = "선택한 캠핑장의 주변시설을 반환한다.", response = Json.class)
//	@GetMapping(value = "/basic/{keyword}")
}
