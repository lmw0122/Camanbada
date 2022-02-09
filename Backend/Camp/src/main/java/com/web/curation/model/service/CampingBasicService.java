package com.web.curation.model.service;

import java.util.List;

import com.web.curation.model.dto.CampingBasicDTO;

public interface CampingBasicService {
	CampingBasicDTO saveOneCampingBasic
//	(String doNm, String sigunguNm, String facltNm, String firstImageUrl, String lineIntro, String address, String manageSttus, double mapX, double mapY, int likes);
	(CampingBasicDTO campingBasicDTO);
	CampingBasicDTO getOneCampingBasicById(Integer campId);
	List<CampingBasicDTO> getListCampingBasicAll();
	List<CampingBasicDTO> getListCampingBasicByKeyword(String keyword);
//	List<CampingBasicDTO> getListCampingBasicByLocation(String location);
}
